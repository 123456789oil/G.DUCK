export default {
  "search/query": {
    "posts": [
      {
        "id": 3833,
        "name": "Bill Dudney",
        "username": "bdudney",
        "avatar_template": "/user_avatar/meta.discourse.org/bdudney/{size}/8343_1.png",
        "uploaded_avatar_id": 8343,
        "created_at": "2013-02-07T17:46:57.469Z",
        "cooked": "<p>I've gotten vagrant up and running with a development environment but it's taking forever to load.<\/p>\n\n<p>For example <a href=\"http://192.168.10.200:3000/\" rel=\"nofollow\">http://192.168.10.200:3000/<\/a> takes tens of seconds to load.<\/p>\n\n<p>I'm running the whole stack on a new rMBP with OS X 10.8.2.<\/p>\n\n<p>Any ideas of what I've done wrong? Or is this just a function of being on the bleeding edge?<\/p>\n\n<p>Thanks,<\/p>\n\n<p>-bd<\/p>",
        "post_number": 1,
        "post_type": 1,
        "updated_at": "2013-02-07T17:46:57.469Z",
        "like_count": 0,
        "reply_count": 1,
        "reply_to_post_number": null,
        "quote_count": 0,
        "avg_time": 24,
        "incoming_link_count": 4422,
        "reads": 327,
        "score": 21978.4,
        "yours": false,
        "topic_id": 2179,
        "topic_slug": "development-mode-super-slow",
        "display_username": "Bill Dudney",
        "primary_group_name": null,
        "version": 2,
        "can_edit": false,
        "can_delete": false,
        "can_recover": false,
        "user_title": null,
        "actions_summary": [
          {
            "id": 2,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 3,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 4,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 5,
            "count": 0,
            "hidden": true,
            "can_act": false
          },
          {
            "id": 6,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 7,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 8,
            "count": 0,
            "hidden": false,
            "can_act": false
          }
        ],
        "moderator": false,
        "admin": false,
        "staff": false,
        "user_id": 1828,
        "hidden": false,
        "hidden_reason_id": null,
        "trust_level": 1,
        "deleted_at": null,
        "user_deleted": false,
        "edit_reason": null,
        "can_view_edit_history": true,
        "wiki": false,
        "blurb": "I've gotten vagrant up and running with a development environment but it's taking forever to load. For example http://192.168.10.200:3000/ takes..."
      },
      {
        "id": 48887,
        "name": "Arpit Jalan",
        "username": "techAPJ",
        "avatar_template": "/user_avatar/meta.discourse.org/techapj/{size}/3281_1.png",
        "uploaded_avatar_id": 3281,
        "created_at": "2014-04-12T22:22:07.930Z",
        "cooked": "<p>So you want to set up Discourse on Ubuntu to hack on and develop with?<\/p>\n\n<p>We'll assume that you don't have Ruby/Rails/Postgre/Redis installed on your Ubuntu system. Let's begin!<\/p>\n\n<p><em>Although this guide assumes that you are using Ubuntu, but the set-up instructions will work fine for any Debian based ditribution.<\/em><\/p>\n\n<p><em>(If you want to install Discourse for production use, see <a href=\"https://github.com/discourse/discourse/blob/master/docs/INSTALL.md\">our install guide<\/a>)<\/em><\/p>\n\n<h2>Install Discourse Dependencies<\/h2>\n\n<p>Run <a href=\"https://github.com/techAPJ/install-rails/blob/master/linux\">this script<\/a> in terminal, to setup Rails development environment:<\/p>\n\n<pre><code>bash &lt;(wget -qO- https://raw.githubusercontent.com/techAPJ/install-rails/master/linux)<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/9/9df737ab44032f2f671ac15513456bc668314591.png\" class=\"lightbox\" title=\"linux_script.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/9/9df737ab44032f2f671ac15513456bc668314591_1_690x189.png\" width=\"690\" height=\"189\"><div class=\"meta\">\n<span class=\"filename\">linux_script.png<\/span><span class=\"informations\">770x211 9.62 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>This will install following new packages on your system:<\/p>\n\n<ul>\n<li><a href=\"http://git-scm.com/\">Git<\/a><\/li>\n<li><a href=\"https://github.com/sstephenson/rbenv\">rbenv<\/a><\/li>\n<li><a href=\"https://github.com/sstephenson/ruby-build\">ruby-build<\/a><\/li>\n<li>\n<a href=\"https://www.ruby-lang.org/\">Ruby<\/a> (stable)<\/li>\n<li><a href=\"http://rubyonrails.org/\">Rails<\/a><\/li>\n<li><a href=\"http://www.postgresql.org/\">PostgreSQL<\/a><\/li>\n<li><a href=\"https://sqlite.org/\">SQLite<\/a><\/li>\n<li><a href=\"http://redis.io/\">Redis<\/a><\/li>\n<li><a href=\"http://bundler.io/\">Bundler<\/a><\/li>\n<li><a href=\"http://www.imagemagick.org/\">ImageMagick<\/a><\/li>\n<\/ul>\n\n<p>Install Phantomjs:<\/p>\n\n<p>For 32 bit macine:<\/p>\n\n<pre><code>cd /usr/local/share\nsudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-i686.tar.bz2\nsudo tar xvf phantomjs-1.9.8-linux-i686.tar.bz2\nsudo rm phantomjs-1.9.8-linux-i686.tar.bz2\nsudo ln -s /usr/local/share/phantomjs-1.9.8-linux-i686/bin/phantomjs /usr/local/bin/phantomjs\ncd<\/code><\/pre>\n\n<p>For 64 bit machine:<\/p>\n\n<pre><code>cd /usr/local/share\nsudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-x86_64.tar.bz2\nsudo tar xvf phantomjs-1.9.8-linux-x86_64.tar.bz2\nsudo rm phantomjs-1.9.8-linux-x86_64.tar.bz2\nsudo ln -s /usr/local/share/phantomjs-1.9.8-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs\ncd<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/0/0781669e092e0bdc29f8ec1830193503e884fd56.png\" class=\"lightbox\" title=\"phantomjs.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/0/0781669e092e0bdc29f8ec1830193503e884fd56_1_690x121.png\" width=\"690\" height=\"121\"><div class=\"meta\">\n<span class=\"filename\">phantomjs.png<\/span><span class=\"informations\">969x171 10.1 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p><em>In case you have any of this package pre-installed and don't want to run entire script, see the <a href=\"https://github.com/techAPJ/install-rails/blob/master/linux\">script<\/a> and pick the packages you don't have currently installed. The script is fine-tuned for Discourse, and includes all the packages required for Discourse installation.<\/em><\/p>\n\n<p>Now that we have installed Discourse dependencies, let's move on to install Discourse itself.<\/p>\n\n<h2>Clone Discourse<\/h2>\n\n<p>Clone the Discourse repository in <code>~/discourse<\/code> folder:<\/p>\n\n<pre><code>git clone https://github.com/discourse/discourse.git ~/discourse<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/2/23578e144aa4c37d7e577d570d34789add1078f1.png\" class=\"lightbox\" title=\"git_clone.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/2/23578e144aa4c37d7e577d570d34789add1078f1_1_690x97.png\" width=\"690\" height=\"97\"><div class=\"meta\">\n<span class=\"filename\">git_clone.png<\/span><span class=\"informations\">967x137 7.73 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<h2>Setup Database<\/h2>\n\n<p>Open psql prompt as postgre user<\/p>\n\n<pre><code>sudo -u postgres psql postgres<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/1/1cb9e5198b2695904204c2b1434427b610468610.png\" class=\"lightbox\" title=\"pg.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/1/1cb9e5198b2695904204c2b1434427b610468610_1_690x177.png\" width=\"690\" height=\"177\"><div class=\"meta\">\n<span class=\"filename\">pg.png<\/span><span class=\"informations\">725x187 5.79 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Create role <strong>with the same name as your ubuntu system username<\/strong> with <em>discourse<\/em> as password:<\/p>\n\n<pre><code>CREATE ROLE discourse WITH LOGIN ENCRYPTED PASSWORD 'discourse' CREATEDB SUPERUSER;<\/code><\/pre>\n\n<p>In the above command, I named the role as <strong>discourse<\/strong>, this means that my ubuntu system username is <strong>discourse<\/strong>. (<em>It is necessary for role name to be same as system username, otherwise migrations will not run<\/em>)<\/p>\n\n<p>Check that you have successfully created <strong>discourse<\/strong> role:<\/p>\n\n<pre><code>\\du<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/6/60439a04daa4efc8756a9528873cffb61c327bee.png\" class=\"lightbox\" title=\"pg_user.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/6/60439a04daa4efc8756a9528873cffb61c327bee_1_690x176.png\" width=\"690\" height=\"176\"><div class=\"meta\">\n<span class=\"filename\">pg_user.png<\/span><span class=\"informations\">725x185 7.5 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Create <strong>discourse_development<\/strong> and <strong>discourse_test<\/strong> database:<\/p>\n\n<pre><code>CREATE DATABASE discourse_development WITH OWNER discourse ENCODING 'UTF8' TEMPLATE template0;\nCREATE DATABASE discourse_test WITH OWNER discourse ENCODING 'UTF8' TEMPLATE template0;<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/1/183b46c7f1ffaa024e7c99884fbcc022da2c91b4.png\" class=\"lightbox\" title=\"pg_db.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/1/183b46c7f1ffaa024e7c99884fbcc022da2c91b4_1_690x136.png\" width=\"690\" height=\"136\"><div class=\"meta\">\n<span class=\"filename\">pg_db.png<\/span><span class=\"informations\">724x143 6.82 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Exit psql prompt by pressing <kbd>ctrl<\/kbd><kbd>d<\/kbd><\/p>\n\n<p>Now access psql prompt in <strong>discourse_development<\/strong> database as <strong>discourse<\/strong> user:<\/p>\n\n<pre><code>psql -d discourse_development -U discourse -h localhost<\/code><\/pre>\n\n<p>When prompted for password, provide the password which you set at the time of creating role, if you followed the guide as is, the password is <strong>discourse<\/strong><\/p>\n\n<p>Run following commands, separately:<\/p>\n\n<pre><code>CREATE EXTENSION pg_trgm;\nCREATE EXTENSION hstore;<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/0/04f4c1e4b3dd8ea1d183f653a77d35baca8c1201.png\" class=\"lightbox\" title=\"pg_dev.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/0/04f4c1e4b3dd8ea1d183f653a77d35baca8c1201_1_690x300.png\" width=\"690\" height=\"300\"><div class=\"meta\">\n<span class=\"filename\">pg_dev.png<\/span><span class=\"informations\">726x316 13.4 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div><\/p>\n\n<p>Exit psql prompt by pressing <kbd>ctrl<\/kbd><kbd>d<\/kbd><\/p>\n\n<p>Now access psql prompt in <strong>discourse_test<\/strong> database as <strong>discourse<\/strong> user:<\/p>\n\n<pre><code>psql -d discourse_test -U discourse -h localhost<\/code><\/pre>\n\n<p>When prompted for password, provide the password which you set at the time of creating role, if you followed the guide as is, the password is <strong>discourse<\/strong><\/p>\n\n<p>Run following commands, separately:<\/p>\n\n<pre><code>CREATE EXTENSION pg_trgm;\nCREATE EXTENSION hstore;<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/d/d2a25de9f227831bf66107ab2ddc1a7abafca2f4.png\" class=\"lightbox\" title=\"pg_test.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/d/d2a25de9f227831bf66107ab2ddc1a7abafca2f4_1_690x302.png\" width=\"690\" height=\"302\"><div class=\"meta\">\n<span class=\"filename\">pg_test.png<\/span><span class=\"informations\">726x318 12.9 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Exit psql prompt by pressing <kbd>ctrl<\/kbd><kbd>d<\/kbd><\/p>\n\n<p>You have set-up the database successfully!<\/p>\n\n<h2>Bootstrap Discourse<\/h2>\n\n<p>Switch to your Discourse folder:<\/p>\n\n<pre><code>cd ~/discourse<\/code><\/pre>\n\n<p>Install the needed gems<\/p>\n\n<pre><code>bundle install<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/e/e1e8390c232c20f6b532c80927cec07185a8e556.png\" class=\"lightbox\" title=\"bundle.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/e/e1e8390c232c20f6b532c80927cec07185a8e556_1_690x236.png\" width=\"690\" height=\"236\"><div class=\"meta\">\n<span class=\"filename\">bundle.png<\/span><span class=\"informations\">724x248 9.75 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Now that you have successfully configured database connection, run this command:<\/p>\n\n<pre><code>bundle exec rake db:migrate db:test:prepare db:seed_fu<\/code><\/pre>\n\n<p>Now, try running the specs: <\/p>\n\n<pre><code>bundle exec rake autospec<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/8/8a645e90108980cea7fa06a524ecbf1558e142f1.png\" class=\"lightbox\" title=\"specs.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/8/8a645e90108980cea7fa06a524ecbf1558e142f1_1_690x253.png\" width=\"690\" height=\"253\"><div class=\"meta\">\n<span class=\"filename\">specs.png<\/span><span class=\"informations\">717x263 8.63 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Start rails server:<\/p>\n\n<pre><code>bundle exec rails server<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/a/a8e7892e23bbfe3e613ebc6062605989de83310c.png\" class=\"lightbox\" title=\"server.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/a/a8e7892e23bbfe3e613ebc6062605989de83310c_1_690x218.png\" width=\"690\" height=\"218\"><div class=\"meta\">\n<span class=\"filename\">server.png<\/span><span class=\"informations\">724x229 10.8 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>You should now be able to connect to discourse app on <a href=\"http://localhost:3000\">http://localhost:3000<\/a> - try it out!<\/p>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/3/3f2fbcd03c5a30b08c51155130418085da77744e.png\" class=\"lightbox\" title=\"discourse_start.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/3/3f2fbcd03c5a30b08c51155130418085da77744e_1_690x188.png\" width=\"690\" height=\"188\"><div class=\"meta\">\n<span class=\"filename\">discourse_start.png<\/span><span class=\"informations\">1919x525 20.3 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<h2>Configure Mail and Create New Account<\/h2>\n\n<p>We will use <a href=\"http://mailcatcher.me/\">MailCatcher<\/a> to serve emails in development environment. Install and run MailCatcher:<\/p>\n\n<pre><code>gem install mailcatcher\nmailcatcher --http-ip 0.0.0.0<\/code><\/pre>\n\n<p>Create new account:<\/p>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/3X/1/d/1d2e710b0865e78868c74d6cc54f96d1e2eb9303.png\" class=\"lightbox\" title=\"create_account.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/3X/1/d/1d2e710b0865e78868c74d6cc54f96d1e2eb9303_1_690x384.png\" width=\"690\" height=\"384\"><div class=\"meta\">\n<span class=\"filename\">create_account.png<\/span><span class=\"informations\">720x401 13.5 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Check confirmation email by going to MailCatcher web interface at <a href=\"http://localhost:1080/\">http://localhost:1080/<\/a><\/p>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/3X/2/9/292a2cb247b37770cf4506f8745fdc39753e547e.png\" class=\"lightbox\" title=\"mc_sign_up_email.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/3X/2/9/292a2cb247b37770cf4506f8745fdc39753e547e_1_690x172.png\" width=\"690\" height=\"172\"><div class=\"meta\">\n<span class=\"filename\">mc_sign_up_email.png<\/span><span class=\"informations\">1919x480 21.5 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p><em>If you did not receive the email, try running this in console<\/em>: <code>bundle exec sidekiq -q default<\/code><\/p>\n\n<p>Click the confirmation link and your account will be activated!<\/p>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/8/8fc06df9b084b4535bcafaaef675799d6ad3e5c9.png\" class=\"lightbox\" title=\"disc_normal_acc.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/8/8fc06df9b084b4535bcafaaef675799d6ad3e5c9_1_690x154.png\" width=\"690\" height=\"154\"><div class=\"meta\">\n<span class=\"filename\">disc_normal_acc.png<\/span><span class=\"informations\">1919x430 21.8 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<h2>Access Admin<\/h2>\n\n<p>Now, to make your account as admin, run the following commands in rails console:<\/p>\n\n<pre><code>RAILS_ENV=development bundle exec rails c\nu = User.last\nu.admin = true\nu.save<\/code><\/pre>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/a/aa5478bc48ef8fef622e09e7948abb8ad8218000.png\" class=\"lightbox\" title=\"admin_console.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/a/aa5478bc48ef8fef622e09e7948abb8ad8218000_1_690x441.png\" width=\"690\" height=\"441\"><div class=\"meta\">\n<span class=\"filename\">admin_console.png<\/span><span class=\"informations\">722x462 31.7 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Once you execute the above commands successfully, check out your Discourse account again:<\/p>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//meta-s3-cdn.global.ssl.fastly.net/original/2X/7/72840ed4dbbc02544471649ee4eaa272fde205ef.png\" class=\"lightbox\" title=\"admin_success.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/7/72840ed4dbbc02544471649ee4eaa272fde205ef_1_690x371.png\" width=\"690\" height=\"371\"><div class=\"meta\">\n<span class=\"filename\">admin_success.png<\/span><span class=\"informations\">1919x1032 30.3 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Congratulations! You are now the admin of your own Discourse installation!<\/p>\n\n<p>Happy hacking!<\/p>\n\n<p>If anything needs to be improved in this guide, feel free to ask on <a href=\"https://meta.discourse.org/t/developers-guide-to-install-discourse-on-ubuntu/14727\">meta.discourse.org<\/a>, or even better, submit a <a href=\"https://github.com/techAPJ/discourse-development-ubuntu\">pull request<\/a>.<\/p>",
        "post_number": 1,
        "post_type": 1,
        "updated_at": "2015-06-22T17:24:20.607Z",
        "like_count": 15,
        "reply_count": 2,
        "reply_to_post_number": null,
        "quote_count": 0,
        "avg_time": 36,
        "incoming_link_count": 4680,
        "reads": 491,
        "score": 23815.8,
        "yours": false,
        "topic_id": 14727,
        "topic_slug": "beginners-guide-to-install-discourse-on-ubuntu-for-development",
        "display_username": "Arpit Jalan",
        "primary_group_name": null,
        "version": 26,
        "can_edit": false,
        "can_delete": false,
        "can_recover": false,
        "user_title": "team",
        "actions_summary": [
          {
            "id": 2,
            "count": 15,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 3,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 4,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 5,
            "count": 0,
            "hidden": true,
            "can_act": false
          },
          {
            "id": 6,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 7,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 8,
            "count": 0,
            "hidden": false,
            "can_act": false
          }
        ],
        "moderator": true,
        "admin": true,
        "staff": true,
        "user_id": 8222,
        "hidden": false,
        "hidden_reason_id": null,
        "trust_level": 4,
        "deleted_at": null,
        "user_deleted": false,
        "edit_reason": null,
        "can_view_edit_history": true,
        "wiki": true,
        "blurb": "So you want to set up Discourse on Ubuntu to hack on and develop with? We'll assume that you don't have Ruby/Rails/Postgre/Redis installed on your Ubuntu system..."
      },
      {
        "id": 53437,
        "name": "Arpit Jalan",
        "username": "techAPJ",
        "avatar_template": "/user_avatar/meta.discourse.org/techapj/{size}/3281_1.png",
        "uploaded_avatar_id": 3281,
        "created_at": "2014-05-19T16:59:51.082Z",
        "cooked": "<p>So you want to set up Discourse on Mac OS X to hack on and develop with?<\/p>\n\n<p>We'll assume that you don't have Ruby/Rails/Postgre/Redis installed on your Mac. Let's begin!<\/p>\n\n<p><em>(If you want to install Discourse for production use, see <a href=\"https://github.com/discourse/discourse/blob/master/docs/INSTALL.md\">our install guide<\/a>)<\/em><\/p>\n\n<h2>Install Discourse Dependencies<\/h2>\n\n<p>Run <a href=\"https://github.com/techAPJ/install-rails/blob/master/mac\">this script<\/a> in terminal, to setup Rails development environment:<\/p>\n\n<pre><code>bash &lt;(curl -s https://raw.githubusercontent.com/techAPJ/install-rails/master/mac)<\/code><\/pre>\n\n<p>This script will install following new packages on your system:<\/p>\n\n<ul>\n<li><a href=\"http://git-scm.com/\">Git<\/a><\/li>\n<li><a href=\"https://github.com/sstephenson/rbenv\">rbenv<\/a><\/li>\n<li><a href=\"https://github.com/sstephenson/ruby-build\">ruby-build<\/a><\/li>\n<li>\n<a href=\"https://www.ruby-lang.org/\">Ruby<\/a> (latest stable)<\/li>\n<li><a href=\"http://rubyonrails.org/\">Rails<\/a><\/li>\n<li><a href=\"http://www.postgresql.org/\">PostgreSQL<\/a><\/li>\n<li><a href=\"http://redis.io/\">Redis<\/a><\/li>\n<li><a href=\"http://bundler.io/\">Bundler<\/a><\/li>\n<li><a href=\"http://www.imagemagick.org/\">ImageMagick<\/a><\/li>\n<li><a href=\"http://phantomjs.org/\">PhantomJS<\/a><\/li>\n<\/ul>\n\n<p><em>In case you have any of this package pre-installed and don't want to run entire script, see the <a href=\"https://github.com/techAPJ/install-rails/blob/master/mac\">script<\/a> and pick the packages you don't have currently installed. The script is fine-tuned for Discourse, and includes all the packages required for Discourse installation.<\/em><\/p>\n\n<p>Now that we have installed Discourse dependencies, let's move on to install Discourse itself.<\/p>\n\n<h2>Clone Discourse<\/h2>\n\n<p>Clone the Discourse repository in <code>~/discourse<\/code> folder:<\/p>\n\n<pre><code>git clone https://github.com/discourse/discourse.git ~/discourse<\/code><\/pre>\n\n<p><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/e/ed047a1077c7d3af966434d093fbf9ddd3db51d9.png\" width=\"571\" height=\"142\"> <\/p>\n\n<p><code>~<\/code> indicates home folder, so Discourse source code will be available in your home folder.<\/p>\n\n<h2>Setup Database<\/h2>\n\n<p>Open psql prompt:<\/p>\n\n<pre><code>psql postgres<\/code><\/pre>\n\n<p><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/0/0a31b7a439991beedf32a974abd423cd7a774b76.png\" width=\"574\" height=\"148\"> <\/p>\n\n<p>Create <strong>discourse_development<\/strong> and <strong>discourse_test<\/strong> database with your <em><a href=\"http://forums.macrumors.com/showthread.php?t=898855\">account short name<\/a><\/em> specified as role:<\/p>\n\n<pre><code>CREATE DATABASE discourse_development WITH OWNER techapj ENCODING 'UTF8' TEMPLATE template0;\nCREATE DATABASE discourse_test WITH OWNER techapj ENCODING 'UTF8' TEMPLATE template0;<\/code><\/pre>\n\n<p>Note that in above commands I specified the role as <em>techapj<\/em>, this means that my <a href=\"http://forums.macrumors.com/showthread.php?t=898855\">short name<\/a> is <em>techapj<\/em>, <strong>replace this with your own <a href=\"http://forums.macrumors.com/showthread.php?t=898855\">short name<\/a>.<\/strong><\/p>\n\n<p><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/9/9e976ace87a952fe60879c522234082fd7166eaf.png\" width=\"573\" height=\"235\"> <\/p>\n\n<p>Exit psql prompt by pressing <kbd>control<\/kbd><kbd>d<\/kbd><\/p>\n\n<p>Now access psql prompt in <strong>discourse_development<\/strong> database as <em>your short name<\/em> user:<\/p>\n\n<pre><code>psql -d discourse_development -U techapj -h localhost<\/code><\/pre>\n\n<p>Run following commands, separately:<\/p>\n\n<pre><code>CREATE EXTENSION pg_trgm;\nCREATE EXTENSION hstore;<\/code><\/pre>\n\n<p><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/9/9bfda41f4f5b020735cd641a4922e0696ad148a0.png\" width=\"571\" height=\"208\"> <\/p>\n\n<p>Exit psql prompt by pressing <kbd>control<\/kbd><kbd>d<\/kbd><\/p>\n\n<p>Now access psql prompt in <strong>discourse_test<\/strong> database as <em>your short name<\/em> user:<\/p>\n\n<pre><code>psql -d discourse_test -U techapj -h localhost<\/code><\/pre>\n\n<p>Run following commands, separately:<\/p>\n\n<pre><code>CREATE EXTENSION pg_trgm;\nCREATE EXTENSION hstore;<\/code><\/pre>\n\n<p><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/3/319b2a9f4b63cf8daf1ce3a4060f2465b6717a7f.png\" width=\"571\" height=\"205\"> <\/p>\n\n<p>Exit psql prompt by pressing <kbd>control<\/kbd><kbd>d<\/kbd><\/p>\n\n<p>You have set-up the database successfully!<\/p>\n\n<h2>Bootstrap Discourse<\/h2>\n\n<p>Switch to your Discourse folder:<\/p>\n\n<pre><code>cd ~/discourse<\/code><\/pre>\n\n<p>Install the needed gems<\/p>\n\n<pre><code>bundle install<\/code><\/pre>\n\n<p><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/e/eaabecd382ed7241e7f30c9bd20239140b5fd384.png\" width=\"572\" height=\"366\"> <\/p>\n\n<p>Now that you have successfully installed gems, run this command:<\/p>\n\n<pre><code>bundle exec rake db:migrate db:test:prepare db:seed_fu<\/code><\/pre>\n\n<p>Try running the specs: <\/p>\n\n<pre><code>bundle exec rake autospec<\/code><\/pre>\n\n<p><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/4/4b1414710dd77e46e0add0e78168d392f5a81e2c.png\" width=\"574\" height=\"429\"> <\/p>\n\n<p>All the tests should pass.<\/p>\n\n<p>Start rails server:<\/p>\n\n<pre><code>bundle exec rails server<\/code><\/pre>\n\n<p><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/0/00584d579d543960d53a36512a2ba4f649204ad4.png\" width=\"575\" height=\"279\"> <\/p>\n\n<p>You should now be able to connect with your Discourse app on <a href=\"http://localhost:3000\">http://localhost:3000<\/a> - try it out!<\/p>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/6/6325a4d6da2ec891eb8a58dede2b501447050287.png\" class=\"lightbox\" title=\"Screen Shot 2014-05-19 at 13.04.01.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/6/6325a4d6da2ec891eb8a58dede2b501447050287_1_690x253.png\" width=\"690\" height=\"253\"><div class=\"meta\">\n<span class=\"filename\">Screen Shot 2014-05-19 at 13.04.01.png<\/span><span class=\"informations\">1255x461 98.7 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<h2>Create New Admin<\/h2>\n\n<p>To create a new admin, run the following commands in rails console:<\/p>\n\n<pre><code>RAILS_ENV=development bundle exec rake admin:create<\/code><\/pre>\n\n<p>Just enter your input as suggested, you can create an admin account. <\/p>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/8/8fc06df9b084b4535bcafaaef675799d6ad3e5c9.png\" class=\"lightbox\" title=\"fccdb29463e82f23.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/8/8fc06df9b084b4535bcafaaef675799d6ad3e5c9.png\" width=\"690\" height=\"154\"><div class=\"meta\">\n<span class=\"filename\">fccdb29463e82f23.png<\/span><span class=\"informations\">1919x430<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p><div class=\"lightbox-wrapper\"><a href=\"//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/9/982a9ffe0223aebb8df7fd9efbd07dbedef78c0a.png\" class=\"lightbox\" title=\"Screen Shot 2014-05-19 at 13.20.02.png\"><img src=\"//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/9/982a9ffe0223aebb8df7fd9efbd07dbedef78c0a_1_690x415.png\" width=\"690\" height=\"415\"><div class=\"meta\">\n<span class=\"filename\">Screen Shot 2014-05-19 at 13.20.02.png<\/span><span class=\"informations\">1256x756 124 KB<\/span><span class=\"expand\"><\/span>\n<\/div><\/a><\/div> <\/p>\n\n<p>Happy hacking!<\/p>",
        "post_number": 1,
        "post_type": 1,
        "updated_at": "2015-04-26T06:51:23.549Z",
        "like_count": 13,
        "reply_count": 1,
        "reply_to_post_number": null,
        "quote_count": 0,
        "avg_time": 36,
        "incoming_link_count": 1483,
        "reads": 274,
        "score": 7985.4,
        "yours": false,
        "topic_id": 15772,
        "topic_slug": "beginners-guide-to-install-discourse-on-mac-os-x-for-development",
        "display_username": "Arpit Jalan",
        "primary_group_name": null,
        "version": 12,
        "can_edit": false,
        "can_delete": false,
        "can_recover": false,
        "user_title": "team",
        "actions_summary": [
          {
            "id": 2,
            "count": 13,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 3,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 4,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 5,
            "count": 0,
            "hidden": true,
            "can_act": false
          },
          {
            "id": 6,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 7,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 8,
            "count": 0,
            "hidden": false,
            "can_act": false
          }
        ],
        "moderator": true,
        "admin": true,
        "staff": true,
        "user_id": 8222,
        "hidden": false,
        "hidden_reason_id": null,
        "trust_level": 4,
        "deleted_at": null,
        "user_deleted": false,
        "edit_reason": "",
        "can_view_edit_history": true,
        "wiki": true,
        "blurb": "So you want to set up Discourse on Mac OS X to hack on and develop with? We'll assume that you don't have Ruby/Rails/Postgre/Redis installed on your Mac. Let's be..."
      },
      {
        "id": 38398,
        "name": "Eric Carlson",
        "username": "ecuk",
        "avatar_template": "/letter_avatar/ecuk/{size}/5_fcf819f9b3791cb8c87edf29c8984f83.png",
        "uploaded_avatar_id": null,
        "created_at": "2014-01-24T15:08:06.111Z",
        "cooked": "<p>Continuing the discussion from <a href=\"https://meta.discourse.org/t/log-of-setting-up-docker-in-virtualbox/12111/7\">Log of setting up Docker in Virtualbox<\/a>:<\/p>\n\n<aside class=\"quote\" data-post=\"7\" data-topic=\"12111\" data-full=\"true\"><div class=\"title\">\n<div class=\"quote-controls\"><\/div>\n<img alt=\"\" width=\"20\" height=\"20\" src=\"//discourse-cdn.global.ssl.fastly.net/meta/user_avatar/meta.discourse.org/riking/40/40212_1.png\" class=\"avatar\">riking:<\/div>\n<blockquote><p>I'm actually loving having the VM set up - whenever I need to test something, the server was savestated with it running, so all I need to do is go to <code>/admin/docker<\/code>, refresh once, hit upgrade, and test it out.<\/p><\/blockquote><\/aside>\n\n<p>What is the preferred development environment these days? I have Vagrant up and running as recommended in <a href=\"http://blog.discourse.org/2013/04/discourse-as-your-first-rails-app/\" rel=\"nofollow\">Discourse as Your First Rails App<\/a> and <a href=\"https://github.com/discourse/discourse/blob/master/docs/VAGRANT.md\" rel=\"nofollow\">Discourse Vagrant Developer Guide<\/a>, but much of the recent discussion has been about <a href=\"https://github.com/discourse/discourse_docker\" rel=\"nofollow\">Discourse Docker<\/a> (which I freely admit I haven't really looked at for lack of time).<\/p>\n\n<p>For development purposes, should I carry on using Vagrant for the time being? Or should I be setting up a VM with Ubuntu and then installing Docker and Discourse Docker?<\/p>\n\n<p>(As a related side issue, my current production environment was built by following the <a href=\"https://github.com/discourse/discourse/blob/master/docs/INSTALL-ubuntu.md\" rel=\"nofollow\">Discourse Install Guide<\/a>. Would it be prudent to switch that over to Docker at some point as well? Meaning, is version 1.0 likely to recommend Docker instead of a raw installation? This question deserves a topic of its own in some other category, but it seems best to see what people have to say about development environments before launching a second, better-informed discussion about production environments.)<\/p>\n\n<p>So, for development, Vagrant or Docker?<\/p>",
        "post_number": 1,
        "post_type": 1,
        "updated_at": "2014-01-24T15:08:06.111Z",
        "like_count": 0,
        "reply_count": 0,
        "reply_to_post_number": null,
        "quote_count": 0,
        "avg_time": 39,
        "incoming_link_count": 1241,
        "reads": 149,
        "score": 6161.35,
        "yours": false,
        "topic_id": 12170,
        "topic_slug": "development-environment-vagrant-or-docker",
        "display_username": "Eric Carlson",
        "primary_group_name": null,
        "version": 3,
        "can_edit": false,
        "can_delete": false,
        "can_recover": false,
        "user_title": null,
        "actions_summary": [
          {
            "id": 2,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 3,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 4,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 5,
            "count": 0,
            "hidden": true,
            "can_act": false
          },
          {
            "id": 6,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 7,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 8,
            "count": 0,
            "hidden": false,
            "can_act": false
          }
        ],
        "moderator": false,
        "admin": false,
        "staff": false,
        "user_id": 7190,
        "hidden": false,
        "hidden_reason_id": null,
        "trust_level": 2,
        "deleted_at": null,
        "user_deleted": false,
        "edit_reason": null,
        "can_view_edit_history": true,
        "wiki": false,
        "blurb": "...ed to do is go to /admin/docker , refresh once, hit upgrade, and test it out. What is the preferred development environment these days? I have Vagrant up and running as recommended in Discourse as Your F..."
      },
      {
        "id": 4782,
        "name": "hamburglar",
        "username": "hamburglar",
        "avatar_template": "/user_avatar/meta.discourse.org/hamburglar/{size}/7895_1.png",
        "uploaded_avatar_id": 7895,
        "created_at": "2013-02-08T23:14:40.018Z",
        "cooked": "<p>Is there any trick to getting a dev instance to send email?  I managed to get a copy set up and running, but when I sign up, the email never gets sent.  I have sendmail installed and I don't see any errors in the app log, but I also don't see any activity in the system mail log.  Any hints as to what to look at?<\/p>",
        "post_number": 1,
        "post_type": 1,
        "updated_at": "2013-02-08T23:14:40.018Z",
        "like_count": 0,
        "reply_count": 1,
        "reply_to_post_number": null,
        "quote_count": 0,
        "avg_time": 22,
        "incoming_link_count": 386,
        "reads": 163,
        "score": 1953.7,
        "yours": false,
        "topic_id": 2507,
        "topic_slug": "getting-dev-instance-to-send-email",
        "display_username": "hamburglar",
        "primary_group_name": null,
        "version": 2,
        "can_edit": false,
        "can_delete": false,
        "can_recover": false,
        "user_title": null,
        "actions_summary": [
          {
            "id": 2,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 3,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 4,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 5,
            "count": 0,
            "hidden": true,
            "can_act": false
          },
          {
            "id": 6,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 7,
            "count": 0,
            "hidden": false,
            "can_act": false
          },
          {
            "id": 8,
            "count": 0,
            "hidden": false,
            "can_act": false
          }
        ],
        "moderator": false,
        "admin": false,
        "staff": false,
        "user_id": 1566,
        "hidden": false,
        "hidden_reason_id": null,
        "trust_level": 1,
        "deleted_at": null,
        "user_deleted": false,
        "edit_reason": null,
        "can_view_edit_history": true,
        "wiki": false,
        "blurb": "Is there any trick to getting a dev instance to send email? I managed to get a copy set up and running, but when I sign up, the email n..."
      }
    ],
    "topics": [
      {
        "id": 2179,
        "title": "Development mode super slow",
        "fancy_title": "Development mode super slow",
        "slug": "development-mode-super-slow",
        "posts_count": 72,
        "reply_count": 53,
        "highest_post_number": 73,
        "image_url": null,
        "created_at": "2013-02-07T17:46:57.262Z",
        "last_posted_at": "2015-04-17T08:08:26.671Z",
        "bumped": true,
        "bumped_at": "2015-04-17T08:08:26.671Z",
        "unseen": false,
        "pinned": false,
        "unpinned": null,
        "visible": true,
        "closed": false,
        "archived": false,
        "bookmarked": null,
        "liked": null,
        "views": 9538,
        "like_count": 45,
        "has_summary": true,
        "archetype": "regular",
        "last_poster_username": null,
        "category_id": 7,
        "pinned_globally": false,
        "posters": []
      },
      {
        "id": 14727,
        "title": "Beginners Guide to Install Discourse on Ubuntu for Development",
        "fancy_title": "Beginners Guide to Install Discourse on Ubuntu for Development",
        "slug": "beginners-guide-to-install-discourse-on-ubuntu-for-development",
        "posts_count": 52,
        "reply_count": 35,
        "highest_post_number": 59,
        "image_url": "//discourse-meta.s3-us-west-1.amazonaws.com/optimized/2X/9/9df737ab44032f2f671ac15513456bc668314591_1_690x189.png",
        "created_at": "2014-04-12T22:22:07.751Z",
        "last_posted_at": "2015-05-21T00:29:57.769Z",
        "bumped": true,
        "bumped_at": "2015-05-21T00:29:57.769Z",
        "unseen": false,
        "pinned": false,
        "unpinned": null,
        "visible": true,
        "closed": false,
        "archived": false,
        "bookmarked": null,
        "liked": null,
        "views": 6878,
        "like_count": 46,
        "has_summary": true,
        "archetype": "regular",
        "last_poster_username": null,
        "category_id": 10,
        "pinned_globally": false,
        "posters": []
      },
      {
        "id": 15772,
        "title": "Beginners Guide to Install Discourse on Mac OS X for Development",
        "fancy_title": "Beginners Guide to Install Discourse on Mac OS X for Development",
        "slug": "beginners-guide-to-install-discourse-on-mac-os-x-for-development",
        "posts_count": 51,
        "reply_count": 28,
        "highest_post_number": 52,
        "image_url": "//discourse-meta.s3-us-west-1.amazonaws.com/original/2X/e/ed047a1077c7d3af966434d093fbf9ddd3db51d9.png",
        "created_at": "2014-05-19T16:59:50.976Z",
        "last_posted_at": "2015-04-24T14:51:48.315Z",
        "bumped": true,
        "bumped_at": "2015-04-24T14:51:48.315Z",
        "unseen": false,
        "pinned": false,
        "unpinned": null,
        "visible": true,
        "closed": false,
        "archived": false,
        "bookmarked": null,
        "liked": null,
        "views": 3668,
        "like_count": 47,
        "has_summary": true,
        "archetype": "regular",
        "last_poster_username": null,
        "category_id": 10,
        "pinned_globally": false,
        "posters": []
      },
      {
        "id": 12170,
        "title": "Development environment: Vagrant or Docker?",
        "fancy_title": "Development environment: Vagrant or Docker?",
        "slug": "development-environment-vagrant-or-docker",
        "posts_count": 16,
        "reply_count": 4,
        "highest_post_number": 16,
        "image_url": null,
        "created_at": "2014-01-24T15:08:05.980Z",
        "last_posted_at": "2014-12-22T12:02:39.197Z",
        "bumped": true,
        "bumped_at": "2014-12-22T12:02:39.197Z",
        "unseen": false,
        "pinned": false,
        "unpinned": null,
        "visible": true,
        "closed": false,
        "archived": false,
        "bookmarked": null,
        "liked": null,
        "views": 2666,
        "like_count": 9,
        "has_summary": false,
        "archetype": "regular",
        "last_poster_username": null,
        "category_id": 7,
        "pinned_globally": false,
        "posters": []
      },
      {
        "id": 2507,
        "title": "Getting dev instance to send email?",
        "fancy_title": "Getting dev instance to send email?",
        "slug": "getting-dev-instance-to-send-email",
        "posts_count": 19,
        "reply_count": 13,
        "highest_post_number": 21,
        "image_url": null,
        "created_at": "2013-02-08T23:14:39.746Z",
        "last_posted_at": "2014-07-25T01:55:43.505Z",
        "bumped": true,
        "bumped_at": "2014-07-25T01:55:43.505Z",
        "unseen": false,
        "pinned": false,
        "unpinned": null,
        "visible": true,
        "closed": false,
        "archived": false,
        "bookmarked": null,
        "liked": null,
        "views": 1881,
        "like_count": 15,
        "has_summary": false,
        "archetype": "regular",
        "last_poster_username": null,
        "category_id": 7,
        "pinned_globally": false,
        "posters": []
      }
    ],
    "users": [
      {
        "id": 3229,
        "username": "dev",
        "uploaded_avatar_id": null,
        "avatar_template": "/letter_avatar/dev/{size}/5_fcf819f9b3791cb8c87edf29c8984f83.png"
      },
      {
        "id": 13166,
        "username": "devon",
        "uploaded_avatar_id": 37175,
        "avatar_template": "/user_avatar/meta.discourse.org/devon/{size}/37175_1.png"
      },
      {
        "id": 12979,
        "username": "devlesedi",
        "uploaded_avatar_id": null,
        "avatar_template": "/letter_avatar/devlesedi/{size}/5_fcf819f9b3791cb8c87edf29c8984f83.png"
      },
      {
        "id": 13381,
        "username": "devwizard",
        "uploaded_avatar_id": null,
        "avatar_template": "/letter_avatar/devwizard/{size}/5_fcf819f9b3791cb8c87edf29c8984f83.png"
      },
      {
        "id": 5993,
        "username": "devmach",
        "uploaded_avatar_id": null,
        "avatar_template": "/letter_avatar/devmach/{size}/5_fcf819f9b3791cb8c87edf29c8984f83.png"
      }
    ],
    "categories": [
      {
        "id": 7,
        "name": "dev",
        "color": "000",
        "text_color": "FFFFFF",
        "slug": "dev",
        "topic_count": 701,
        "post_count": 5320,
        "description": "This category is for topics related to hacking on Discourse: submitting pull requests, configuring development environments, coding conventions, and so forth.",
        "description_text": "This category is for topics related to hacking on Discourse: submitting pull requests, configuring development environments, coding conventions, and so forth.",
        "topic_url": "/t/category-definition-for-dev/1026",
        "read_restricted": false,
        "permission": null,
        "notification_level": null,
        "logo_url": null,
        "background_url": null
      }
    ],
    "grouped_search_result": {
      "more_posts": true,
      "more_users": true,
      "more_categories": null,
      "post_ids": [
        3833,
        48887,
        53437,
        38398,
        4782
      ],
      "user_ids": [
        3229,
        13166,
        12979,
        13381,
        5993
      ],
      "category_ids": [
        7
      ]
    }
  }
};
