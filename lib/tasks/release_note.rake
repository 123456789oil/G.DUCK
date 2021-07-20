# frozen_string_literal: true

DATE_REGEX = /\A\d{4}-\d{2}-\d{2}/

CHANGE_TYPES = [
  { pattern: /^FEATURE:/, heading: "New Features" },
  { pattern: /^FIX:/, heading: "Bug Fixes" },
  { pattern: /^UX:/, heading: "UX Changes" },
  { pattern: /^SECURITY:/, heading: "Security Changes" },
  { pattern: /^PERF:/, heading: "Performance" },
  { pattern: /^A11Y:/, heading: "Accessibility" },
]

desc "generate a release note from the important commits"
task "release_note:generate", :from, :to, :repo do |t, args|
  repo = args[:repo] || "."
  changes = find_changes(repo, args[:from], args[:to])

  CHANGE_TYPES.each do |ct|
    print_changes(ct[:heading], changes[ct])
  end

  if changes.values.all?(&:empty?)
    puts "(no changes)", ""
  end
end

# To use with all-the-plugins:
#  1. Make sure you have a local, up-to-date clone of https://github.com/discourse/all-the-plugins
#  2. In all-the-plugins, `git submodule update --init --recursive --remote`
#  3. Change back to your discourse directory
#  4. rake "release_note:plugins:generate[ 2021-06-01 , 2021-07-01 , /path/to/all-the-plugins/plugins/* , discourse ]"
desc "generate release notes for all official plugins in a directory"
task "release_note:plugins:generate", :from, :to, :plugin_glob, :org do |t, args|
  from = args[:from]
  to = args[:to]
  plugin_glob = args[:plugin_glob] || "./plugins/*"
  git_org = args[:org]

  all_repos = Dir.glob(plugin_glob).filter { |f| File.directory?(f) && File.exists?("#{f}/.git")  }

  if git_org
    all_repos = all_repos.filter { |dir| `git -C #{dir} remote get-url origin`.match?(/github.com[\/:]#{git_org}\//) }
  end

  no_changes_repos = []

  all_repos.each do |dir|
    name = File.basename(dir)
    changes = find_changes(dir, from, to)

    if changes.values.all?(&:empty?)
      no_changes_repos << name
      next
    end

    puts "## #{name}\n\n"
    CHANGE_TYPES.each do |ct|
      print_changes(ct[:heading], changes[ct])
    end
    puts "---", ""
  end

  puts "(No changes found in #{no_changes_repos.join(", ")})"
end

def find_changes(repo, from, to)
  dates = from&.match?(DATE_REGEX) || to&.match?(DATE_REGEX)

  if !dates
    from ||= `git -C #{repo} describe --tags --abbrev=0`.strip
    to ||= "HEAD"
  end

  cmd = "git -C #{repo} log --pretty='tformat:%s' "
  if dates
    cmd += "--after '#{from}' " if from
    cmd += "--before '#{to}' " if to
  else
    cmd += "#{from}..#{to}"
  end

  out = `#{cmd}`
  raise "Status #{$?.exitstatus} running git log\n#{out}" if !$?.success?

  changes = {}
  CHANGE_TYPES.each do |ct|
    changes[ct] = Set.new
  end

  out.each_line do |comment|
    next if comment =~ /^\s*Revert/
    split_comments(comment).each do |line|
      ct = CHANGE_TYPES.find { |t| line =~ t[:pattern] }
      changes[ct] << better(line) if ct
    end
  end

  changes
end

def print_changes(heading, changes)
  return if changes.length == 0

  puts "### #{heading}", ""
  puts changes.to_a, ""
end

def better(line)
  line = remove_prefix(line)
  line = escape_brackets(line)
  line = remove_pull_request(line)
  line[0] = '\#' if line[0] == '#'
  if line[0]
    line[0] = line[0].capitalize
    "- " + line
  else
    nil
  end
end

def remove_prefix(line)
  line.gsub(/^(FIX|FEATURE|UX|SECURITY|PERF|A11Y):/, "").strip
end

def escape_brackets(line)
  line.gsub("<", "`<")
    .gsub(">", ">`")
    .gsub("[", "`[")
    .gsub("]", "]`")
end

def remove_pull_request(line)
  line.gsub(/ \(\#\d+\)$/, "")
end

def split_comments(text)
  text = normalize_terms(text)
  terms = ["FIX:", "FEATURE:", "UX:", "SECURITY:" , "PERF:" , "A11Y:"]
  terms.each do |term|
    text = text.gsub(/(#{term})+/i, term)
    text = newlines_at_term(text, term)
  end
  text.split("\n")
end

def normalize_terms(text)
  text = text.gsub(/(BUGFIX|FIX|BUG):/i, "FIX:")
  text = text.gsub(/FEATURE:/i, "FEATURE:")
  text = text.gsub(/(UX|UI):/i, "UX:")
  text = text.gsub(/(SECURITY):/i, "SECURITY:")
  text = text.gsub(/(PERF):/i, "PERF:")
  text = text.gsub(/(A11Y):/i, "A11Y:")
end

def newlines_at_term(text, term)
  if text.include?(term)
    text = text.split(term).map { |l| l.strip }.join("\n#{term} ")
  end
  text
end
