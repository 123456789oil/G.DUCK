ace.define(
  "ace/mode/doc_comment_highlight_rules",
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/text_highlight_rules"
  ],
  function(e, t, n) {
    "use strict";
    var r = e("../lib/oop"),
      i = e("./text_highlight_rules").TextHighlightRules,
      s = function() {
        this.$rules = {
          start: [
            { token: "comment.doc.tag", regex: "@[\\w\\d_]+" },
            s.getTagRule(),
            { defaultToken: "comment.doc", caseInsensitive: !0 }
          ]
        };
      };
    r.inherits(s, i),
      (s.getTagRule = function(e) {
        return {
          token: "comment.doc.tag.storage.type",
          regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
        };
      }),
      (s.getStartRule = function(e) {
        return { token: "comment.doc", regex: "\\/\\*(?=\\*)", next: e };
      }),
      (s.getEndRule = function(e) {
        return { token: "comment.doc", regex: "\\*\\/", next: e };
      }),
      (t.DocCommentHighlightRules = s);
  }
),
  ace.define(
    "ace/mode/javascript_highlight_rules",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/doc_comment_highlight_rules",
      "ace/mode/text_highlight_rules"
    ],
    function(e, t, n) {
      "use strict";
      function a() {
        var e = o.replace("\\d", "\\d\\-"),
          t = {
            onMatch: function(e, t, n) {
              var r = e.charAt(1) == "/" ? 2 : 1;
              if (r == 1)
                t != this.nextState
                  ? n.unshift(this.next, this.nextState, 0)
                  : n.unshift(this.next),
                  n[2]++;
              else if (r == 2 && t == this.nextState) {
                n[1]--;
                if (!n[1] || n[1] < 0) n.shift(), n.shift();
              }
              return [
                {
                  type:
                    "meta.tag.punctuation." +
                    (r == 1 ? "" : "end-") +
                    "tag-open.xml",
                  value: e.slice(0, r)
                },
                { type: "meta.tag.tag-name.xml", value: e.substr(r) }
              ];
            },
            regex: "</?" + e + "",
            next: "jsxAttributes",
            nextState: "jsx"
          };
        this.$rules.start.unshift(t);
        var n = { regex: "{", token: "paren.quasi.start", push: "start" };
        (this.$rules.jsx = [
          n,
          t,
          { include: "reference" },
          { defaultToken: "string" }
        ]),
          (this.$rules.jsxAttributes = [
            {
              token: "meta.tag.punctuation.tag-close.xml",
              regex: "/?>",
              onMatch: function(e, t, n) {
                return (
                  t == n[0] && n.shift(),
                  e.length == 2 &&
                    (n[0] == this.nextState && n[1]--,
                    (!n[1] || n[1] < 0) && n.splice(0, 2)),
                  (this.next = n[0] || "start"),
                  [{ type: this.token, value: e }]
                );
              },
              nextState: "jsx"
            },
            n,
            f("jsxAttributes"),
            { token: "entity.other.attribute-name.xml", regex: e },
            { token: "keyword.operator.attribute-equals.xml", regex: "=" },
            { token: "text.tag-whitespace.xml", regex: "\\s+" },
            {
              token: "string.attribute-value.xml",
              regex: "'",
              stateName: "jsx_attr_q",
              push: [
                {
                  token: "string.attribute-value.xml",
                  regex: "'",
                  next: "pop"
                },
                { include: "reference" },
                { defaultToken: "string.attribute-value.xml" }
              ]
            },
            {
              token: "string.attribute-value.xml",
              regex: '"',
              stateName: "jsx_attr_qq",
              push: [
                {
                  token: "string.attribute-value.xml",
                  regex: '"',
                  next: "pop"
                },
                { include: "reference" },
                { defaultToken: "string.attribute-value.xml" }
              ]
            },
            t
          ]),
          (this.$rules.reference = [
            {
              token: "constant.language.escape.reference.xml",
              regex:
                "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
            }
          ]);
      }
      function f(e) {
        return [
          {
            token: "comment",
            regex: /\/\*/,
            next: [
              i.getTagRule(),
              { token: "comment", regex: "\\*\\/", next: e || "pop" },
              { defaultToken: "comment", caseInsensitive: !0 }
            ]
          },
          {
            token: "comment",
            regex: "\\/\\/",
            next: [
              i.getTagRule(),
              { token: "comment", regex: "$|^", next: e || "pop" },
              { defaultToken: "comment", caseInsensitive: !0 }
            ]
          }
        ];
      }
      var r = e("../lib/oop"),
        i = e("./doc_comment_highlight_rules").DocCommentHighlightRules,
        s = e("./text_highlight_rules").TextHighlightRules,
        o = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*",
        u = function(e) {
          var t = this.createKeywordMapper(
              {
                "variable.language":
                  "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
                keyword:
                  "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
                "storage.type": "const|let|var|function",
                "constant.language": "null|Infinity|NaN|undefined",
                "support.function": "alert",
                "constant.language.boolean": "true|false"
              },
              "identifier"
            ),
            n =
              "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",
            r =
              "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
          this.$rules = {
            no_regex: [
              i.getStartRule("doc-start"),
              f("no_regex"),
              { token: "string", regex: "'(?=.)", next: "qstring" },
              { token: "string", regex: '"(?=.)', next: "qqstring" },
              {
                token: "constant.numeric",
                regex: /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/
              },
              {
                token: "constant.numeric",
                regex: /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/
              },
              {
                token: [
                  "storage.type",
                  "punctuation.operator",
                  "support.function",
                  "punctuation.operator",
                  "entity.name.function",
                  "text",
                  "keyword.operator"
                ],
                regex: "(" + o + ")(\\.)(prototype)(\\.)(" + o + ")(\\s*)(=)",
                next: "function_arguments"
              },
              {
                token: [
                  "storage.type",
                  "punctuation.operator",
                  "entity.name.function",
                  "text",
                  "keyword.operator",
                  "text",
                  "storage.type",
                  "text",
                  "paren.lparen"
                ],
                regex:
                  "(" +
                  o +
                  ")(\\.)(" +
                  o +
                  ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
              },
              {
                token: [
                  "entity.name.function",
                  "text",
                  "keyword.operator",
                  "text",
                  "storage.type",
                  "text",
                  "paren.lparen"
                ],
                regex: "(" + o + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
              },
              {
                token: [
                  "storage.type",
                  "punctuation.operator",
                  "entity.name.function",
                  "text",
                  "keyword.operator",
                  "text",
                  "storage.type",
                  "text",
                  "entity.name.function",
                  "text",
                  "paren.lparen"
                ],
                regex:
                  "(" +
                  o +
                  ")(\\.)(" +
                  o +
                  ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                next: "function_arguments"
              },
              {
                token: [
                  "storage.type",
                  "text",
                  "entity.name.function",
                  "text",
                  "paren.lparen"
                ],
                regex: "(function)(\\s+)(" + o + ")(\\s*)(\\()",
                next: "function_arguments"
              },
              {
                token: [
                  "entity.name.function",
                  "text",
                  "punctuation.operator",
                  "text",
                  "storage.type",
                  "text",
                  "paren.lparen"
                ],
                regex: "(" + o + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
              },
              {
                token: ["text", "text", "storage.type", "text", "paren.lparen"],
                regex: "(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
              },
              { token: "keyword", regex: "from(?=\\s*('|\"))" },
              { token: "keyword", regex: "(?:" + n + ")\\b", next: "start" },
              { token: ["support.constant"], regex: /that\b/ },
              {
                token: [
                  "storage.type",
                  "punctuation.operator",
                  "support.function.firebug"
                ],
                regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
              },
              { token: t, regex: o },
              {
                token: "punctuation.operator",
                regex: /[.](?![.])/,
                next: "property"
              },
              { token: "storage.type", regex: /=>/, next: "start" },
              {
                token: "keyword.operator",
                regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                next: "start"
              },
              {
                token: "punctuation.operator",
                regex: /[?:,;.]/,
                next: "start"
              },
              { token: "paren.lparen", regex: /[\[({]/, next: "start" },
              { token: "paren.rparen", regex: /[\])}]/ },
              { token: "comment", regex: /^#!.*$/ }
            ],
            property: [
              { token: "text", regex: "\\s+" },
              {
                token: [
                  "storage.type",
                  "punctuation.operator",
                  "entity.name.function",
                  "text",
                  "keyword.operator",
                  "text",
                  "storage.type",
                  "text",
                  "entity.name.function",
                  "text",
                  "paren.lparen"
                ],
                regex:
                  "(" +
                  o +
                  ")(\\.)(" +
                  o +
                  ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
                next: "function_arguments"
              },
              { token: "punctuation.operator", regex: /[.](?![.])/ },
              {
                token: "support.function",
                regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
              },
              {
                token: "support.function.dom",
                regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
              },
              {
                token: "support.constant",
                regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
              },
              { token: "identifier", regex: o },
              { regex: "", token: "empty", next: "no_regex" }
            ],
            start: [
              i.getStartRule("doc-start"),
              f("start"),
              { token: "string.regexp", regex: "\\/", next: "regex" },
              { token: "text", regex: "\\s+|^$", next: "start" },
              { token: "empty", regex: "", next: "no_regex" }
            ],
            regex: [
              {
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
              },
              {
                token: "string.regexp",
                regex: "/[sxngimy]*",
                next: "no_regex"
              },
              {
                token: "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
              },
              {
                token: "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
              },
              { token: "constant.language.delimiter", regex: /\|/ },
              {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
              },
              { token: "empty", regex: "$", next: "no_regex" },
              { defaultToken: "string.regexp" }
            ],
            regex_character_class: [
              {
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
              },
              { token: "constant.language.escape", regex: "]", next: "regex" },
              { token: "constant.language.escape", regex: "-" },
              { token: "empty", regex: "$", next: "no_regex" },
              { defaultToken: "string.regexp.charachterclass" }
            ],
            function_arguments: [
              { token: "variable.parameter", regex: o },
              { token: "punctuation.operator", regex: "[, ]+" },
              { token: "punctuation.operator", regex: "$" },
              { token: "empty", regex: "", next: "no_regex" }
            ],
            qqstring: [
              { token: "constant.language.escape", regex: r },
              { token: "string", regex: "\\\\$", consumeLineEnd: !0 },
              { token: "string", regex: '"|$', next: "no_regex" },
              { defaultToken: "string" }
            ],
            qstring: [
              { token: "constant.language.escape", regex: r },
              { token: "string", regex: "\\\\$", consumeLineEnd: !0 },
              { token: "string", regex: "'|$", next: "no_regex" },
              { defaultToken: "string" }
            ]
          };
          if (!e || !e.noES6)
            this.$rules.no_regex.unshift(
              {
                regex: "[{}]",
                onMatch: function(e, t, n) {
                  this.next = e == "{" ? this.nextState : "";
                  if (e == "{" && n.length) n.unshift("start", t);
                  else if (e == "}" && n.length) {
                    n.shift(), (this.next = n.shift());
                    if (
                      this.next.indexOf("string") != -1 ||
                      this.next.indexOf("jsx") != -1
                    )
                      return "paren.quasi.end";
                  }
                  return e == "{" ? "paren.lparen" : "paren.rparen";
                },
                nextState: "start"
              },
              {
                token: "string.quasi.start",
                regex: /`/,
                push: [
                  { token: "constant.language.escape", regex: r },
                  { token: "paren.quasi.start", regex: /\${/, push: "start" },
                  { token: "string.quasi.end", regex: /`/, next: "pop" },
                  { defaultToken: "string.quasi" }
                ]
              }
            ),
              (!e || e.jsx != 0) && a.call(this);
          this.embedRules(i, "doc-", [i.getEndRule("no_regex")]),
            this.normalizeRules();
        };
      r.inherits(u, s), (t.JavaScriptHighlightRules = u);
    }
  ),
  ace.define(
    "ace/mode/matching_brace_outdent",
    ["require", "exports", "module", "ace/range"],
    function(e, t, n) {
      "use strict";
      var r = e("../range").Range,
        i = function() {};
      (function() {
        (this.checkOutdent = function(e, t) {
          return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1;
        }),
          (this.autoOutdent = function(e, t) {
            var n = e.getLine(t),
              i = n.match(/^(\s*\})/);
            if (!i) return 0;
            var s = i[1].length,
              o = e.findMatchingBracket({ row: t, column: s });
            if (!o || o.row == t) return 0;
            var u = this.$getIndent(e.getLine(o.row));
            e.replace(new r(t, 0, t, s - 1), u);
          }),
          (this.$getIndent = function(e) {
            return e.match(/^\s*/)[0];
          });
      }.call(i.prototype),
        (t.MatchingBraceOutdent = i));
    }
  ),
  ace.define(
    "ace/mode/folding/cstyle",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/range",
      "ace/mode/folding/fold_mode"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../../lib/oop"),
        i = e("../../range").Range,
        s = e("./fold_mode").FoldMode,
        o = (t.FoldMode = function(e) {
          e &&
            ((this.foldingStartMarker = new RegExp(
              this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)
            )),
            (this.foldingStopMarker = new RegExp(
              this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)
            )));
        });
      r.inherits(o, s),
        function() {
          (this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/),
            (this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/),
            (this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/),
            (this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/),
            (this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/),
            (this._getFoldWidgetBase = this.getFoldWidget),
            (this.getFoldWidget = function(e, t, n) {
              var r = e.getLine(n);
              if (
                this.singleLineBlockCommentRe.test(r) &&
                !this.startRegionRe.test(r) &&
                !this.tripleStarBlockCommentRe.test(r)
              )
                return "";
              var i = this._getFoldWidgetBase(e, t, n);
              return !i && this.startRegionRe.test(r) ? "start" : i;
            }),
            (this.getFoldWidgetRange = function(e, t, n, r) {
              var i = e.getLine(n);
              if (this.startRegionRe.test(i))
                return this.getCommentRegionBlock(e, i, n);
              var s = i.match(this.foldingStartMarker);
              if (s) {
                var o = s.index;
                if (s[1]) return this.openingBracketBlock(e, s[1], n, o);
                var u = e.getCommentFoldRange(n, o + s[0].length, 1);
                return (
                  u &&
                    !u.isMultiLine() &&
                    (r
                      ? (u = this.getSectionRange(e, n))
                      : t != "all" && (u = null)),
                  u
                );
              }
              if (t === "markbegin") return;
              var s = i.match(this.foldingStopMarker);
              if (s) {
                var o = s.index + s[0].length;
                return s[1]
                  ? this.closingBracketBlock(e, s[1], n, o)
                  : e.getCommentFoldRange(n, o, -1);
              }
            }),
            (this.getSectionRange = function(e, t) {
              var n = e.getLine(t),
                r = n.search(/\S/),
                s = t,
                o = n.length;
              t += 1;
              var u = t,
                a = e.getLength();
              while (++t < a) {
                n = e.getLine(t);
                var f = n.search(/\S/);
                if (f === -1) continue;
                if (r > f) break;
                var l = this.getFoldWidgetRange(e, "all", t);
                if (l) {
                  if (l.start.row <= s) break;
                  if (l.isMultiLine()) t = l.end.row;
                  else if (r == f) break;
                }
                u = t;
              }
              return new i(s, o, u, e.getLine(u).length);
            }),
            (this.getCommentRegionBlock = function(e, t, n) {
              var r = t.search(/\s*$/),
                s = e.getLength(),
                o = n,
                u = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,
                a = 1;
              while (++n < s) {
                t = e.getLine(n);
                var f = u.exec(t);
                if (!f) continue;
                f[1] ? a-- : a++;
                if (!a) break;
              }
              var l = n;
              if (l > o) return new i(o, r, l, t.length);
            });
        }.call(o.prototype);
    }
  ),
  ace.define(
    "ace/mode/javascript",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text",
      "ace/mode/javascript_highlight_rules",
      "ace/mode/matching_brace_outdent",
      "ace/worker/worker_client",
      "ace/mode/behaviour/cstyle",
      "ace/mode/folding/cstyle"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("./text").Mode,
        s = e("./javascript_highlight_rules").JavaScriptHighlightRules,
        o = e("./matching_brace_outdent").MatchingBraceOutdent,
        u = e("../worker/worker_client").WorkerClient,
        a = e("./behaviour/cstyle").CstyleBehaviour,
        f = e("./folding/cstyle").FoldMode,
        l = function() {
          (this.HighlightRules = s),
            (this.$outdent = new o()),
            (this.$behaviour = new a()),
            (this.foldingRules = new f());
        };
      r.inherits(l, i),
        function() {
          (this.lineCommentStart = "//"),
            (this.blockComment = { start: "/*", end: "*/" }),
            (this.$quotes = { '"': '"', "'": "'", "`": "`" }),
            (this.getNextLineIndent = function(e, t, n) {
              var r = this.$getIndent(t),
                i = this.getTokenizer().getLineTokens(t, e),
                s = i.tokens,
                o = i.state;
              if (s.length && s[s.length - 1].type == "comment") return r;
              if (e == "start" || e == "no_regex") {
                var u = t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
                u && (r += n);
              } else if (e == "doc-start") {
                if (o == "start" || o == "no_regex") return "";
                var u = t.match(/^\s*(\/?)\*/);
                u && (u[1] && (r += " "), (r += "* "));
              }
              return r;
            }),
            (this.checkOutdent = function(e, t, n) {
              return this.$outdent.checkOutdent(t, n);
            }),
            (this.autoOutdent = function(e, t, n) {
              this.$outdent.autoOutdent(t, n);
            }),
            (this.createWorker = function(e) {
              var t = new u(
                ["ace"],
                "ace/mode/javascript_worker",
                "JavaScriptWorker"
              );
              return (
                t.attachToDocument(e.getDocument()),
                t.on("annotate", function(t) {
                  e.setAnnotations(t.data);
                }),
                t.on("terminate", function() {
                  e.clearAnnotations();
                }),
                t
              );
            }),
            (this.$id = "ace/mode/javascript"),
            (this.snippetFileId = "ace/snippets/javascript");
        }.call(l.prototype),
        (t.Mode = l);
    }
  ),
  ace.define(
    "ace/mode/css_highlight_rules",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/mode/text_highlight_rules"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("../lib/lang"),
        s = e("./text_highlight_rules").TextHighlightRules,
        o = (t.supportType =
          "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index"),
        u = (t.supportFunction = "rgb|rgba|url|attr|counter|counters"),
        a = (t.supportConstant =
          "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom"),
        f = (t.supportConstantColor =
          "aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen"),
        l = (t.supportConstantFonts =
          "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace"),
        c = (t.numRe = "\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))"),
        h = (t.pseudoElements =
          "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b"),
        p = (t.pseudoClasses =
          "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b"),
        d = function() {
          var e = this.createKeywordMapper(
            {
              "support.function": u,
              "support.constant": a,
              "support.type": o,
              "support.constant.color": f,
              "support.constant.fonts": l
            },
            "text",
            !0
          );
          (this.$rules = {
            start: [
              { include: ["strings", "url", "comments"] },
              { token: "paren.lparen", regex: "\\{", next: "ruleset" },
              { token: "paren.rparen", regex: "\\}" },
              { token: "string", regex: "@(?!viewport)", next: "media" },
              { token: "keyword", regex: "#[a-z0-9-_]+" },
              { token: "keyword", regex: "%" },
              { token: "variable", regex: "\\.[a-z0-9-_]+" },
              { token: "string", regex: ":[a-z0-9-_]+" },
              { token: "constant.numeric", regex: c },
              { token: "constant", regex: "[a-z0-9-_]+" },
              { caseInsensitive: !0 }
            ],
            media: [
              { include: ["strings", "url", "comments"] },
              { token: "paren.lparen", regex: "\\{", next: "start" },
              { token: "paren.rparen", regex: "\\}", next: "start" },
              { token: "string", regex: ";", next: "start" },
              {
                token: "keyword",
                regex:
                  "(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"
              }
            ],
            comments: [
              {
                token: "comment",
                regex: "\\/\\*",
                push: [
                  { token: "comment", regex: "\\*\\/", next: "pop" },
                  { defaultToken: "comment" }
                ]
              }
            ],
            ruleset: [
              { regex: "-(webkit|ms|moz|o)-", token: "text" },
              { token: "punctuation.operator", regex: "[:;]" },
              { token: "paren.rparen", regex: "\\}", next: "start" },
              { include: ["strings", "url", "comments"] },
              {
                token: ["constant.numeric", "keyword"],
                regex:
                  "(" +
                  c +
                  ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"
              },
              { token: "constant.numeric", regex: c },
              { token: "constant.numeric", regex: "#[a-f0-9]{6}" },
              { token: "constant.numeric", regex: "#[a-f0-9]{3}" },
              {
                token: [
                  "punctuation",
                  "entity.other.attribute-name.pseudo-element.css"
                ],
                regex: h
              },
              {
                token: [
                  "punctuation",
                  "entity.other.attribute-name.pseudo-class.css"
                ],
                regex: p
              },
              { include: "url" },
              { token: e, regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*" },
              { caseInsensitive: !0 }
            ],
            url: [
              {
                token: "support.function",
                regex: "(?:url(:?-prefix)?|domain|regexp)\\(",
                push: [
                  { token: "support.function", regex: "\\)", next: "pop" },
                  { defaultToken: "string" }
                ]
              }
            ],
            strings: [
              {
                token: "string.start",
                regex: "'",
                push: [
                  { token: "string.end", regex: "'|$", next: "pop" },
                  { include: "escapes" },
                  {
                    token: "constant.language.escape",
                    regex: /\\$/,
                    consumeLineEnd: !0
                  },
                  { defaultToken: "string" }
                ]
              },
              {
                token: "string.start",
                regex: '"',
                push: [
                  { token: "string.end", regex: '"|$', next: "pop" },
                  { include: "escapes" },
                  {
                    token: "constant.language.escape",
                    regex: /\\$/,
                    consumeLineEnd: !0
                  },
                  { defaultToken: "string" }
                ]
              }
            ],
            escapes: [
              {
                token: "constant.language.escape",
                regex: /\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/
              }
            ]
          }),
            this.normalizeRules();
        };
      r.inherits(d, s), (t.CssHighlightRules = d);
    }
  ),
  ace.define(
    "ace/mode/css_completions",
    ["require", "exports", "module"],
    function(e, t, n) {
      "use strict";
      var r = {
          background: { "#$0": 1 },
          "background-color": { "#$0": 1, transparent: 1, fixed: 1 },
          "background-image": { "url('/$0')": 1 },
          "background-repeat": {
            repeat: 1,
            "repeat-x": 1,
            "repeat-y": 1,
            "no-repeat": 1,
            inherit: 1
          },
          "background-position": {
            bottom: 2,
            center: 2,
            left: 2,
            right: 2,
            top: 2,
            inherit: 2
          },
          "background-attachment": { scroll: 1, fixed: 1 },
          "background-size": { cover: 1, contain: 1 },
          "background-clip": {
            "border-box": 1,
            "padding-box": 1,
            "content-box": 1
          },
          "background-origin": {
            "border-box": 1,
            "padding-box": 1,
            "content-box": 1
          },
          border: { "solid $0": 1, "dashed $0": 1, "dotted $0": 1, "#$0": 1 },
          "border-color": { "#$0": 1 },
          "border-style": {
            solid: 2,
            dashed: 2,
            dotted: 2,
            double: 2,
            groove: 2,
            hidden: 2,
            inherit: 2,
            inset: 2,
            none: 2,
            outset: 2,
            ridged: 2
          },
          "border-collapse": { collapse: 1, separate: 1 },
          bottom: { px: 1, em: 1, "%": 1 },
          clear: { left: 1, right: 1, both: 1, none: 1 },
          color: { "#$0": 1, "rgb(#$00,0,0)": 1 },
          cursor: {
            default: 1,
            pointer: 1,
            move: 1,
            text: 1,
            wait: 1,
            help: 1,
            progress: 1,
            "n-resize": 1,
            "ne-resize": 1,
            "e-resize": 1,
            "se-resize": 1,
            "s-resize": 1,
            "sw-resize": 1,
            "w-resize": 1,
            "nw-resize": 1
          },
          display: {
            none: 1,
            block: 1,
            inline: 1,
            "inline-block": 1,
            "table-cell": 1
          },
          "empty-cells": { show: 1, hide: 1 },
          float: { left: 1, right: 1, none: 1 },
          "font-family": {
            Arial: 2,
            "Comic Sans MS": 2,
            Consolas: 2,
            "Courier New": 2,
            Courier: 2,
            Georgia: 2,
            Monospace: 2,
            "Sans-Serif": 2,
            "Segoe UI": 2,
            Tahoma: 2,
            "Times New Roman": 2,
            "Trebuchet MS": 2,
            Verdana: 1
          },
          "font-size": { px: 1, em: 1, "%": 1 },
          "font-weight": { bold: 1, normal: 1 },
          "font-style": { italic: 1, normal: 1 },
          "font-variant": { normal: 1, "small-caps": 1 },
          height: { px: 1, em: 1, "%": 1 },
          left: { px: 1, em: 1, "%": 1 },
          "letter-spacing": { normal: 1 },
          "line-height": { normal: 1 },
          "list-style-type": {
            none: 1,
            disc: 1,
            circle: 1,
            square: 1,
            decimal: 1,
            "decimal-leading-zero": 1,
            "lower-roman": 1,
            "upper-roman": 1,
            "lower-greek": 1,
            "lower-latin": 1,
            "upper-latin": 1,
            georgian: 1,
            "lower-alpha": 1,
            "upper-alpha": 1
          },
          margin: { px: 1, em: 1, "%": 1 },
          "margin-right": { px: 1, em: 1, "%": 1 },
          "margin-left": { px: 1, em: 1, "%": 1 },
          "margin-top": { px: 1, em: 1, "%": 1 },
          "margin-bottom": { px: 1, em: 1, "%": 1 },
          "max-height": { px: 1, em: 1, "%": 1 },
          "max-width": { px: 1, em: 1, "%": 1 },
          "min-height": { px: 1, em: 1, "%": 1 },
          "min-width": { px: 1, em: 1, "%": 1 },
          overflow: { hidden: 1, visible: 1, auto: 1, scroll: 1 },
          "overflow-x": { hidden: 1, visible: 1, auto: 1, scroll: 1 },
          "overflow-y": { hidden: 1, visible: 1, auto: 1, scroll: 1 },
          padding: { px: 1, em: 1, "%": 1 },
          "padding-top": { px: 1, em: 1, "%": 1 },
          "padding-right": { px: 1, em: 1, "%": 1 },
          "padding-bottom": { px: 1, em: 1, "%": 1 },
          "padding-left": { px: 1, em: 1, "%": 1 },
          "page-break-after": {
            auto: 1,
            always: 1,
            avoid: 1,
            left: 1,
            right: 1
          },
          "page-break-before": {
            auto: 1,
            always: 1,
            avoid: 1,
            left: 1,
            right: 1
          },
          position: { absolute: 1, relative: 1, fixed: 1, static: 1 },
          right: { px: 1, em: 1, "%": 1 },
          "table-layout": { fixed: 1, auto: 1 },
          "text-decoration": {
            none: 1,
            underline: 1,
            "line-through": 1,
            blink: 1
          },
          "text-align": { left: 1, right: 1, center: 1, justify: 1 },
          "text-transform": {
            capitalize: 1,
            uppercase: 1,
            lowercase: 1,
            none: 1
          },
          top: { px: 1, em: 1, "%": 1 },
          "vertical-align": { top: 1, bottom: 1 },
          visibility: { hidden: 1, visible: 1 },
          "white-space": {
            nowrap: 1,
            normal: 1,
            pre: 1,
            "pre-line": 1,
            "pre-wrap": 1
          },
          width: { px: 1, em: 1, "%": 1 },
          "word-spacing": { normal: 1 },
          filter: { "alpha(opacity=$0100)": 1 },
          "text-shadow": { "$02px 2px 2px #777": 1 },
          "text-overflow": { "ellipsis-word": 1, clip: 1, ellipsis: 1 },
          "-moz-border-radius": 1,
          "-moz-border-radius-topright": 1,
          "-moz-border-radius-bottomright": 1,
          "-moz-border-radius-topleft": 1,
          "-moz-border-radius-bottomleft": 1,
          "-webkit-border-radius": 1,
          "-webkit-border-top-right-radius": 1,
          "-webkit-border-top-left-radius": 1,
          "-webkit-border-bottom-right-radius": 1,
          "-webkit-border-bottom-left-radius": 1,
          "-moz-box-shadow": 1,
          "-webkit-box-shadow": 1,
          transform: { "rotate($00deg)": 1, "skew($00deg)": 1 },
          "-moz-transform": { "rotate($00deg)": 1, "skew($00deg)": 1 },
          "-webkit-transform": { "rotate($00deg)": 1, "skew($00deg)": 1 }
        },
        i = function() {};
      (function() {
        (this.completionsDefined = !1),
          (this.defineCompletions = function() {
            if (document) {
              var e = document.createElement("c").style;
              for (var t in e) {
                if (typeof e[t] != "string") continue;
                var n = t.replace(/[A-Z]/g, function(e) {
                  return "-" + e.toLowerCase();
                });
                r.hasOwnProperty(n) || (r[n] = 1);
              }
            }
            this.completionsDefined = !0;
          }),
          (this.getCompletions = function(e, t, n, r) {
            this.completionsDefined || this.defineCompletions();
            if (e === "ruleset" || t.$mode.$id == "ace/mode/scss") {
              var i = t.getLine(n.row).substr(0, n.column);
              return /:[^;]+$/.test(i)
                ? (/([\w\-]+):[^:]*$/.test(i),
                  this.getPropertyValueCompletions(e, t, n, r))
                : this.getPropertyCompletions(e, t, n, r);
            }
            return [];
          }),
          (this.getPropertyCompletions = function(e, t, n, i) {
            var s = Object.keys(r);
            return s.map(function(e) {
              return {
                caption: e,
                snippet: e + ": $0;",
                meta: "property",
                score: 1e6
              };
            });
          }),
          (this.getPropertyValueCompletions = function(e, t, n, i) {
            var s = t.getLine(n.row).substr(0, n.column),
              o = (/([\w\-]+):[^:]*$/.exec(s) || {})[1];
            if (!o) return [];
            var u = [];
            return (
              o in r && typeof r[o] == "object" && (u = Object.keys(r[o])),
              u.map(function(e) {
                return {
                  caption: e,
                  snippet: e,
                  meta: "property value",
                  score: 1e6
                };
              })
            );
          });
      }.call(i.prototype),
        (t.CssCompletions = i));
    }
  ),
  ace.define(
    "ace/mode/behaviour/css",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/behaviour",
      "ace/mode/behaviour/cstyle",
      "ace/token_iterator"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../../lib/oop"),
        i = e("../behaviour").Behaviour,
        s = e("./cstyle").CstyleBehaviour,
        o = e("../../token_iterator").TokenIterator,
        u = function() {
          this.inherit(s),
            this.add("colon", "insertion", function(e, t, n, r, i) {
              if (i === ":" && n.selection.isEmpty()) {
                var s = n.getCursorPosition(),
                  u = new o(r, s.row, s.column),
                  a = u.getCurrentToken();
                a && a.value.match(/\s+/) && (a = u.stepBackward());
                if (a && a.type === "support.type") {
                  var f = r.doc.getLine(s.row),
                    l = f.substring(s.column, s.column + 1);
                  if (l === ":") return { text: "", selection: [1, 1] };
                  if (/^(\s+[^;]|\s*$)/.test(f.substring(s.column)))
                    return { text: ":;", selection: [1, 1] };
                }
              }
            }),
            this.add("colon", "deletion", function(e, t, n, r, i) {
              var s = r.doc.getTextRange(i);
              if (!i.isMultiLine() && s === ":") {
                var u = n.getCursorPosition(),
                  a = new o(r, u.row, u.column),
                  f = a.getCurrentToken();
                f && f.value.match(/\s+/) && (f = a.stepBackward());
                if (f && f.type === "support.type") {
                  var l = r.doc.getLine(i.start.row),
                    c = l.substring(i.end.column, i.end.column + 1);
                  if (c === ";") return i.end.column++, i;
                }
              }
            }),
            this.add("semicolon", "insertion", function(e, t, n, r, i) {
              if (i === ";" && n.selection.isEmpty()) {
                var s = n.getCursorPosition(),
                  o = r.doc.getLine(s.row),
                  u = o.substring(s.column, s.column + 1);
                if (u === ";") return { text: "", selection: [1, 1] };
              }
            }),
            this.add("!important", "insertion", function(e, t, n, r, i) {
              if (i === "!" && n.selection.isEmpty()) {
                var s = n.getCursorPosition(),
                  o = r.doc.getLine(s.row);
                if (/^\s*(;|}|$)/.test(o.substring(s.column)))
                  return { text: "!important", selection: [10, 10] };
              }
            });
        };
      r.inherits(u, s), (t.CssBehaviour = u);
    }
  ),
  ace.define(
    "ace/mode/css",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text",
      "ace/mode/css_highlight_rules",
      "ace/mode/matching_brace_outdent",
      "ace/worker/worker_client",
      "ace/mode/css_completions",
      "ace/mode/behaviour/css",
      "ace/mode/folding/cstyle"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("./text").Mode,
        s = e("./css_highlight_rules").CssHighlightRules,
        o = e("./matching_brace_outdent").MatchingBraceOutdent,
        u = e("../worker/worker_client").WorkerClient,
        a = e("./css_completions").CssCompletions,
        f = e("./behaviour/css").CssBehaviour,
        l = e("./folding/cstyle").FoldMode,
        c = function() {
          (this.HighlightRules = s),
            (this.$outdent = new o()),
            (this.$behaviour = new f()),
            (this.$completer = new a()),
            (this.foldingRules = new l());
        };
      r.inherits(c, i),
        function() {
          (this.foldingRules = "cStyle"),
            (this.blockComment = { start: "/*", end: "*/" }),
            (this.getNextLineIndent = function(e, t, n) {
              var r = this.$getIndent(t),
                i = this.getTokenizer().getLineTokens(t, e).tokens;
              if (i.length && i[i.length - 1].type == "comment") return r;
              var s = t.match(/^.*\{\s*$/);
              return s && (r += n), r;
            }),
            (this.checkOutdent = function(e, t, n) {
              return this.$outdent.checkOutdent(t, n);
            }),
            (this.autoOutdent = function(e, t, n) {
              this.$outdent.autoOutdent(t, n);
            }),
            (this.getCompletions = function(e, t, n, r) {
              return this.$completer.getCompletions(e, t, n, r);
            }),
            (this.createWorker = function(e) {
              var t = new u(["ace"], "ace/mode/css_worker", "Worker");
              return (
                t.attachToDocument(e.getDocument()),
                t.on("annotate", function(t) {
                  e.setAnnotations(t.data);
                }),
                t.on("terminate", function() {
                  e.clearAnnotations();
                }),
                t
              );
            }),
            (this.$id = "ace/mode/css"),
            (this.snippetFileId = "ace/snippets/css");
        }.call(c.prototype),
        (t.Mode = c);
    }
  ),
  ace.define(
    "ace/mode/xml_highlight_rules",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text_highlight_rules"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("./text_highlight_rules").TextHighlightRules,
        s = function(e) {
          var t = "[_:a-zA-Z\u00c0-\uffff][-_:.a-zA-Z0-9\u00c0-\uffff]*";
          (this.$rules = {
            start: [
              {
                token: "string.cdata.xml",
                regex: "<\\!\\[CDATA\\[",
                next: "cdata"
              },
              {
                token: [
                  "punctuation.instruction.xml",
                  "keyword.instruction.xml"
                ],
                regex: "(<\\?)(" + t + ")",
                next: "processing_instruction"
              },
              { token: "comment.start.xml", regex: "<\\!--", next: "comment" },
              {
                token: ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
                regex: "(<\\!)(DOCTYPE)(?=[\\s])",
                next: "doctype",
                caseInsensitive: !0
              },
              { include: "tag" },
              { token: "text.end-tag-open.xml", regex: "</" },
              { token: "text.tag-open.xml", regex: "<" },
              { include: "reference" },
              { defaultToken: "text.xml" }
            ],
            processing_instruction: [
              {
                token: "entity.other.attribute-name.decl-attribute-name.xml",
                regex: t
              },
              {
                token: "keyword.operator.decl-attribute-equals.xml",
                regex: "="
              },
              { include: "whitespace" },
              { include: "string" },
              {
                token: "punctuation.xml-decl.xml",
                regex: "\\?>",
                next: "start"
              }
            ],
            doctype: [
              { include: "whitespace" },
              { include: "string" },
              { token: "xml-pe.doctype.xml", regex: ">", next: "start" },
              { token: "xml-pe.xml", regex: "[-_a-zA-Z0-9:]+" },
              {
                token: "punctuation.int-subset",
                regex: "\\[",
                push: "int_subset"
              }
            ],
            int_subset: [
              { token: "text.xml", regex: "\\s+" },
              { token: "punctuation.int-subset.xml", regex: "]", next: "pop" },
              {
                token: [
                  "punctuation.markup-decl.xml",
                  "keyword.markup-decl.xml"
                ],
                regex: "(<\\!)(" + t + ")",
                push: [
                  { token: "text", regex: "\\s+" },
                  {
                    token: "punctuation.markup-decl.xml",
                    regex: ">",
                    next: "pop"
                  },
                  { include: "string" }
                ]
              }
            ],
            cdata: [
              { token: "string.cdata.xml", regex: "\\]\\]>", next: "start" },
              { token: "text.xml", regex: "\\s+" },
              { token: "text.xml", regex: "(?:[^\\]]|\\](?!\\]>))+" }
            ],
            comment: [
              { token: "comment.end.xml", regex: "-->", next: "start" },
              { defaultToken: "comment.xml" }
            ],
            reference: [
              {
                token: "constant.language.escape.reference.xml",
                regex:
                  "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
              }
            ],
            attr_reference: [
              {
                token: "constant.language.escape.reference.attribute-value.xml",
                regex:
                  "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
              }
            ],
            tag: [
              {
                token: [
                  "meta.tag.punctuation.tag-open.xml",
                  "meta.tag.punctuation.end-tag-open.xml",
                  "meta.tag.tag-name.xml"
                ],
                regex: "(?:(<)|(</))((?:" + t + ":)?" + t + ")",
                next: [
                  { include: "attributes" },
                  {
                    token: "meta.tag.punctuation.tag-close.xml",
                    regex: "/?>",
                    next: "start"
                  }
                ]
              }
            ],
            tag_whitespace: [
              { token: "text.tag-whitespace.xml", regex: "\\s+" }
            ],
            whitespace: [{ token: "text.whitespace.xml", regex: "\\s+" }],
            string: [
              {
                token: "string.xml",
                regex: "'",
                push: [
                  { token: "string.xml", regex: "'", next: "pop" },
                  { defaultToken: "string.xml" }
                ]
              },
              {
                token: "string.xml",
                regex: '"',
                push: [
                  { token: "string.xml", regex: '"', next: "pop" },
                  { defaultToken: "string.xml" }
                ]
              }
            ],
            attributes: [
              { token: "entity.other.attribute-name.xml", regex: t },
              { token: "keyword.operator.attribute-equals.xml", regex: "=" },
              { include: "tag_whitespace" },
              { include: "attribute_value" }
            ],
            attribute_value: [
              {
                token: "string.attribute-value.xml",
                regex: "'",
                push: [
                  {
                    token: "string.attribute-value.xml",
                    regex: "'",
                    next: "pop"
                  },
                  { include: "attr_reference" },
                  { defaultToken: "string.attribute-value.xml" }
                ]
              },
              {
                token: "string.attribute-value.xml",
                regex: '"',
                push: [
                  {
                    token: "string.attribute-value.xml",
                    regex: '"',
                    next: "pop"
                  },
                  { include: "attr_reference" },
                  { defaultToken: "string.attribute-value.xml" }
                ]
              }
            ]
          }),
            this.constructor === s && this.normalizeRules();
        };
      (function() {
        this.embedTagRules = function(e, t, n) {
          this.$rules.tag.unshift({
            token: [
              "meta.tag.punctuation.tag-open.xml",
              "meta.tag." + n + ".tag-name.xml"
            ],
            regex: "(<)(" + n + "(?=\\s|>|$))",
            next: [
              { include: "attributes" },
              {
                token: "meta.tag.punctuation.tag-close.xml",
                regex: "/?>",
                next: t + "start"
              }
            ]
          }),
            (this.$rules[n + "-end"] = [
              { include: "attributes" },
              {
                token: "meta.tag.punctuation.tag-close.xml",
                regex: "/?>",
                next: "start",
                onMatch: function(e, t, n) {
                  return n.splice(0), this.token;
                }
              }
            ]),
            this.embedRules(e, t, [
              {
                token: [
                  "meta.tag.punctuation.end-tag-open.xml",
                  "meta.tag." + n + ".tag-name.xml"
                ],
                regex: "(</)(" + n + "(?=\\s|>|$))",
                next: n + "-end"
              },
              { token: "string.cdata.xml", regex: "<\\!\\[CDATA\\[" },
              { token: "string.cdata.xml", regex: "\\]\\]>" }
            ]);
        };
      }.call(i.prototype),
        r.inherits(s, i),
        (t.XmlHighlightRules = s));
    }
  ),
  ace.define(
    "ace/mode/html_highlight_rules",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/mode/css_highlight_rules",
      "ace/mode/javascript_highlight_rules",
      "ace/mode/xml_highlight_rules"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("../lib/lang"),
        s = e("./css_highlight_rules").CssHighlightRules,
        o = e("./javascript_highlight_rules").JavaScriptHighlightRules,
        u = e("./xml_highlight_rules").XmlHighlightRules,
        a = i.createMap({
          a: "anchor",
          button: "form",
          form: "form",
          img: "image",
          input: "form",
          label: "form",
          option: "form",
          script: "script",
          select: "form",
          textarea: "form",
          style: "style",
          table: "table",
          tbody: "table",
          td: "table",
          tfoot: "table",
          th: "table",
          tr: "table"
        }),
        f = function() {
          u.call(this),
            this.addRules({
              attributes: [
                { include: "tag_whitespace" },
                {
                  token: "entity.other.attribute-name.xml",
                  regex: "[-_a-zA-Z0-9:.]+"
                },
                {
                  token: "keyword.operator.attribute-equals.xml",
                  regex: "=",
                  push: [
                    { include: "tag_whitespace" },
                    {
                      token: "string.unquoted.attribute-value.html",
                      regex: "[^<>='\"`\\s]+",
                      next: "pop"
                    },
                    { token: "empty", regex: "", next: "pop" }
                  ]
                },
                { include: "attribute_value" }
              ],
              tag: [
                {
                  token: function(e, t) {
                    var n = a[t];
                    return [
                      "meta.tag.punctuation." +
                        (e == "<" ? "" : "end-") +
                        "tag-open.xml",
                      "meta.tag" + (n ? "." + n : "") + ".tag-name.xml"
                    ];
                  },
                  regex: "(</?)([-_a-zA-Z0-9:.]+)",
                  next: "tag_stuff"
                }
              ],
              tag_stuff: [
                { include: "attributes" },
                {
                  token: "meta.tag.punctuation.tag-close.xml",
                  regex: "/?>",
                  next: "start"
                }
              ]
            }),
            this.embedTagRules(s, "css-", "style"),
            this.embedTagRules(new o({ jsx: !1 }).getRules(), "js-", "script"),
            this.constructor === f && this.normalizeRules();
        };
      r.inherits(f, u), (t.HtmlHighlightRules = f);
    }
  ),
  ace.define(
    "ace/mode/behaviour/xml",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/behaviour",
      "ace/token_iterator",
      "ace/lib/lang"
    ],
    function(e, t, n) {
      "use strict";
      function u(e, t) {
        return e && e.type.lastIndexOf(t + ".xml") > -1;
      }
      var r = e("../../lib/oop"),
        i = e("../behaviour").Behaviour,
        s = e("../../token_iterator").TokenIterator,
        o = e("../../lib/lang"),
        a = function() {
          this.add("string_dquotes", "insertion", function(e, t, n, r, i) {
            if (i == '"' || i == "'") {
              var o = i,
                a = r.doc.getTextRange(n.getSelectionRange());
              if (
                a !== "" &&
                a !== "'" &&
                a != '"' &&
                n.getWrapBehavioursEnabled()
              )
                return { text: o + a + o, selection: !1 };
              var f = n.getCursorPosition(),
                l = r.doc.getLine(f.row),
                c = l.substring(f.column, f.column + 1),
                h = new s(r, f.row, f.column),
                p = h.getCurrentToken();
              if (c == o && (u(p, "attribute-value") || u(p, "string")))
                return { text: "", selection: [1, 1] };
              p || (p = h.stepBackward());
              if (!p) return;
              while (u(p, "tag-whitespace") || u(p, "whitespace"))
                p = h.stepBackward();
              var d = !c || c.match(/\s/);
              if (
                (u(p, "attribute-equals") && (d || c == ">")) ||
                (u(p, "decl-attribute-equals") && (d || c == "?"))
              )
                return { text: o + o, selection: [1, 1] };
            }
          }),
            this.add("string_dquotes", "deletion", function(e, t, n, r, i) {
              var s = r.doc.getTextRange(i);
              if (!i.isMultiLine() && (s == '"' || s == "'")) {
                var o = r.doc.getLine(i.start.row),
                  u = o.substring(i.start.column + 1, i.start.column + 2);
                if (u == s) return i.end.column++, i;
              }
            }),
            this.add("autoclosing", "insertion", function(e, t, n, r, i) {
              if (i == ">") {
                var o = n.getSelectionRange().start,
                  a = new s(r, o.row, o.column),
                  f = a.getCurrentToken() || a.stepBackward();
                if (
                  !f ||
                  !(
                    u(f, "tag-name") ||
                    u(f, "tag-whitespace") ||
                    u(f, "attribute-name") ||
                    u(f, "attribute-equals") ||
                    u(f, "attribute-value")
                  )
                )
                  return;
                if (u(f, "reference.attribute-value")) return;
                if (u(f, "attribute-value")) {
                  var l = a.getCurrentTokenColumn() + f.value.length;
                  if (o.column < l) return;
                  if (o.column == l) {
                    var c = a.stepForward();
                    if (c && u(c, "attribute-value")) return;
                    a.stepBackward();
                  }
                }
                if (/^\s*>/.test(r.getLine(o.row).slice(o.column))) return;
                while (!u(f, "tag-name")) {
                  f = a.stepBackward();
                  if (f.value == "<") {
                    f = a.stepForward();
                    break;
                  }
                }
                var h = a.getCurrentTokenRow(),
                  p = a.getCurrentTokenColumn();
                if (u(a.stepBackward(), "end-tag-open")) return;
                var d = f.value;
                h == o.row && (d = d.substring(0, o.column - p));
                if (this.voidElements.hasOwnProperty(d.toLowerCase())) return;
                return { text: "></" + d + ">", selection: [1, 1] };
              }
            }),
            this.add("autoindent", "insertion", function(e, t, n, r, i) {
              if (i == "\n") {
                var o = n.getCursorPosition(),
                  u = r.getLine(o.row),
                  a = new s(r, o.row, o.column),
                  f = a.getCurrentToken();
                if (f && f.type.indexOf("tag-close") !== -1) {
                  if (f.value == "/>") return;
                  while (f && f.type.indexOf("tag-name") === -1)
                    f = a.stepBackward();
                  if (!f) return;
                  var l = f.value,
                    c = a.getCurrentTokenRow();
                  f = a.stepBackward();
                  if (!f || f.type.indexOf("end-tag") !== -1) return;
                  if (this.voidElements && !this.voidElements[l]) {
                    var h = r.getTokenAt(o.row, o.column + 1),
                      u = r.getLine(c),
                      p = this.$getIndent(u),
                      d = p + r.getTabString();
                    return h && h.value === "</"
                      ? {
                          text: "\n" + d + "\n" + p,
                          selection: [1, d.length, 1, d.length]
                        }
                      : { text: "\n" + d };
                  }
                }
              }
            });
        };
      r.inherits(a, i), (t.XmlBehaviour = a);
    }
  ),
  ace.define(
    "ace/mode/folding/mixed",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/folding/fold_mode"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../../lib/oop"),
        i = e("./fold_mode").FoldMode,
        s = (t.FoldMode = function(e, t) {
          (this.defaultMode = e), (this.subModes = t);
        });
      r.inherits(s, i),
        function() {
          (this.$getMode = function(e) {
            typeof e != "string" && (e = e[0]);
            for (var t in this.subModes)
              if (e.indexOf(t) === 0) return this.subModes[t];
            return null;
          }),
            (this.$tryMode = function(e, t, n, r) {
              var i = this.$getMode(e);
              return i ? i.getFoldWidget(t, n, r) : "";
            }),
            (this.getFoldWidget = function(e, t, n) {
              return (
                this.$tryMode(e.getState(n - 1), e, t, n) ||
                this.$tryMode(e.getState(n), e, t, n) ||
                this.defaultMode.getFoldWidget(e, t, n)
              );
            }),
            (this.getFoldWidgetRange = function(e, t, n) {
              var r = this.$getMode(e.getState(n - 1));
              if (!r || !r.getFoldWidget(e, t, n))
                r = this.$getMode(e.getState(n));
              if (!r || !r.getFoldWidget(e, t, n)) r = this.defaultMode;
              return r.getFoldWidgetRange(e, t, n);
            });
        }.call(s.prototype);
    }
  ),
  ace.define(
    "ace/mode/folding/xml",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/range",
      "ace/mode/folding/fold_mode",
      "ace/token_iterator"
    ],
    function(e, t, n) {
      "use strict";
      function l(e, t) {
        return e.type.lastIndexOf(t + ".xml") > -1;
      }
      var r = e("../../lib/oop"),
        i = e("../../lib/lang"),
        s = e("../../range").Range,
        o = e("./fold_mode").FoldMode,
        u = e("../../token_iterator").TokenIterator,
        a = (t.FoldMode = function(e, t) {
          o.call(this),
            (this.voidElements = e || {}),
            (this.optionalEndTags = r.mixin({}, this.voidElements)),
            t && r.mixin(this.optionalEndTags, t);
        });
      r.inherits(a, o);
      var f = function() {
        (this.tagName = ""),
          (this.closing = !1),
          (this.selfClosing = !1),
          (this.start = { row: 0, column: 0 }),
          (this.end = { row: 0, column: 0 });
      };
      (function() {
        (this.getFoldWidget = function(e, t, n) {
          var r = this._getFirstTagInLine(e, n);
          return r
            ? r.closing || (!r.tagName && r.selfClosing)
              ? t == "markbeginend"
                ? "end"
                : ""
              : !r.tagName ||
                r.selfClosing ||
                this.voidElements.hasOwnProperty(r.tagName.toLowerCase())
              ? ""
              : this._findEndTagInLine(e, n, r.tagName, r.end.column)
              ? ""
              : "start"
            : this.getCommentFoldWidget(e, n);
        }),
          (this.getCommentFoldWidget = function(e, t) {
            return /comment/.test(e.getState(t)) && /<!-/.test(e.getLine(t))
              ? "start"
              : "";
          }),
          (this._getFirstTagInLine = function(e, t) {
            var n = e.getTokens(t),
              r = new f();
            for (var i = 0; i < n.length; i++) {
              var s = n[i];
              if (l(s, "tag-open")) {
                (r.end.column = r.start.column + s.value.length),
                  (r.closing = l(s, "end-tag-open")),
                  (s = n[++i]);
                if (!s) return null;
                (r.tagName = s.value), (r.end.column += s.value.length);
                for (i++; i < n.length; i++) {
                  (s = n[i]), (r.end.column += s.value.length);
                  if (l(s, "tag-close")) {
                    r.selfClosing = s.value == "/>";
                    break;
                  }
                }
                return r;
              }
              if (l(s, "tag-close"))
                return (r.selfClosing = s.value == "/>"), r;
              r.start.column += s.value.length;
            }
            return null;
          }),
          (this._findEndTagInLine = function(e, t, n, r) {
            var i = e.getTokens(t),
              s = 0;
            for (var o = 0; o < i.length; o++) {
              var u = i[o];
              s += u.value.length;
              if (s < r) continue;
              if (l(u, "end-tag-open")) {
                u = i[o + 1];
                if (u && u.value == n) return !0;
              }
            }
            return !1;
          }),
          (this._readTagForward = function(e) {
            var t = e.getCurrentToken();
            if (!t) return null;
            var n = new f();
            do
              if (l(t, "tag-open"))
                (n.closing = l(t, "end-tag-open")),
                  (n.start.row = e.getCurrentTokenRow()),
                  (n.start.column = e.getCurrentTokenColumn());
              else if (l(t, "tag-name")) n.tagName = t.value;
              else if (l(t, "tag-close"))
                return (
                  (n.selfClosing = t.value == "/>"),
                  (n.end.row = e.getCurrentTokenRow()),
                  (n.end.column = e.getCurrentTokenColumn() + t.value.length),
                  e.stepForward(),
                  n
                );
            while ((t = e.stepForward()));
            return null;
          }),
          (this._readTagBackward = function(e) {
            var t = e.getCurrentToken();
            if (!t) return null;
            var n = new f();
            do {
              if (l(t, "tag-open"))
                return (
                  (n.closing = l(t, "end-tag-open")),
                  (n.start.row = e.getCurrentTokenRow()),
                  (n.start.column = e.getCurrentTokenColumn()),
                  e.stepBackward(),
                  n
                );
              l(t, "tag-name")
                ? (n.tagName = t.value)
                : l(t, "tag-close") &&
                  ((n.selfClosing = t.value == "/>"),
                  (n.end.row = e.getCurrentTokenRow()),
                  (n.end.column = e.getCurrentTokenColumn() + t.value.length));
            } while ((t = e.stepBackward()));
            return null;
          }),
          (this._pop = function(e, t) {
            while (e.length) {
              var n = e[e.length - 1];
              if (!t || n.tagName == t.tagName) return e.pop();
              if (this.optionalEndTags.hasOwnProperty(n.tagName)) {
                e.pop();
                continue;
              }
              return null;
            }
          }),
          (this.getFoldWidgetRange = function(e, t, n) {
            var r = this._getFirstTagInLine(e, n);
            if (!r)
              return (
                this.getCommentFoldWidget(e, n) &&
                e.getCommentFoldRange(n, e.getLine(n).length)
              );
            var i = r.closing || r.selfClosing,
              o = [],
              a;
            if (!i) {
              var f = new u(e, n, r.start.column),
                l = { row: n, column: r.start.column + r.tagName.length + 2 };
              r.start.row == r.end.row && (l.column = r.end.column);
              while ((a = this._readTagForward(f))) {
                if (a.selfClosing) {
                  if (!o.length)
                    return (
                      (a.start.column += a.tagName.length + 2),
                      (a.end.column -= 2),
                      s.fromPoints(a.start, a.end)
                    );
                  continue;
                }
                if (a.closing) {
                  this._pop(o, a);
                  if (o.length == 0) return s.fromPoints(l, a.start);
                } else o.push(a);
              }
            } else {
              var f = new u(e, n, r.end.column),
                c = { row: n, column: r.start.column };
              while ((a = this._readTagBackward(f))) {
                if (a.selfClosing) {
                  if (!o.length)
                    return (
                      (a.start.column += a.tagName.length + 2),
                      (a.end.column -= 2),
                      s.fromPoints(a.start, a.end)
                    );
                  continue;
                }
                if (!a.closing) {
                  this._pop(o, a);
                  if (o.length == 0)
                    return (
                      (a.start.column += a.tagName.length + 2),
                      a.start.row == a.end.row &&
                        a.start.column < a.end.column &&
                        (a.start.column = a.end.column),
                      s.fromPoints(a.start, c)
                    );
                } else o.push(a);
              }
            }
          });
      }.call(a.prototype));
    }
  ),
  ace.define(
    "ace/mode/folding/html",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/folding/mixed",
      "ace/mode/folding/xml",
      "ace/mode/folding/cstyle"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../../lib/oop"),
        i = e("./mixed").FoldMode,
        s = e("./xml").FoldMode,
        o = e("./cstyle").FoldMode,
        u = (t.FoldMode = function(e, t) {
          i.call(this, new s(e, t), { "js-": new o(), "css-": new o() });
        });
      r.inherits(u, i);
    }
  ),
  ace.define(
    "ace/mode/html_completions",
    ["require", "exports", "module", "ace/token_iterator"],
    function(e, t, n) {
      "use strict";
      function f(e, t) {
        return e.type.lastIndexOf(t + ".xml") > -1;
      }
      function l(e, t) {
        var n = new r(e, t.row, t.column),
          i = n.getCurrentToken();
        while (i && !f(i, "tag-name")) i = n.stepBackward();
        if (i) return i.value;
      }
      function c(e, t) {
        var n = new r(e, t.row, t.column),
          i = n.getCurrentToken();
        while (i && !f(i, "attribute-name")) i = n.stepBackward();
        if (i) return i.value;
      }
      var r = e("../token_iterator").TokenIterator,
        i = [
          "accesskey",
          "class",
          "contenteditable",
          "contextmenu",
          "dir",
          "draggable",
          "dropzone",
          "hidden",
          "id",
          "inert",
          "itemid",
          "itemprop",
          "itemref",
          "itemscope",
          "itemtype",
          "lang",
          "spellcheck",
          "style",
          "tabindex",
          "title",
          "translate"
        ],
        s = [
          "onabort",
          "onblur",
          "oncancel",
          "oncanplay",
          "oncanplaythrough",
          "onchange",
          "onclick",
          "onclose",
          "oncontextmenu",
          "oncuechange",
          "ondblclick",
          "ondrag",
          "ondragend",
          "ondragenter",
          "ondragleave",
          "ondragover",
          "ondragstart",
          "ondrop",
          "ondurationchange",
          "onemptied",
          "onended",
          "onerror",
          "onfocus",
          "oninput",
          "oninvalid",
          "onkeydown",
          "onkeypress",
          "onkeyup",
          "onload",
          "onloadeddata",
          "onloadedmetadata",
          "onloadstart",
          "onmousedown",
          "onmousemove",
          "onmouseout",
          "onmouseover",
          "onmouseup",
          "onmousewheel",
          "onpause",
          "onplay",
          "onplaying",
          "onprogress",
          "onratechange",
          "onreset",
          "onscroll",
          "onseeked",
          "onseeking",
          "onselect",
          "onshow",
          "onstalled",
          "onsubmit",
          "onsuspend",
          "ontimeupdate",
          "onvolumechange",
          "onwaiting"
        ],
        o = i.concat(s),
        u = {
          a: {
            href: 1,
            target: { _blank: 1, top: 1 },
            ping: 1,
            rel: {
              nofollow: 1,
              alternate: 1,
              author: 1,
              bookmark: 1,
              help: 1,
              license: 1,
              next: 1,
              noreferrer: 1,
              prefetch: 1,
              prev: 1,
              search: 1,
              tag: 1
            },
            media: 1,
            hreflang: 1,
            type: 1
          },
          abbr: {},
          address: {},
          area: {
            shape: 1,
            coords: 1,
            href: 1,
            hreflang: 1,
            alt: 1,
            target: 1,
            media: 1,
            rel: 1,
            ping: 1,
            type: 1
          },
          article: { pubdate: 1 },
          aside: {},
          audio: {
            src: 1,
            autobuffer: 1,
            autoplay: { autoplay: 1 },
            loop: { loop: 1 },
            controls: { controls: 1 },
            muted: { muted: 1 },
            preload: { auto: 1, metadata: 1, none: 1 }
          },
          b: {},
          base: { href: 1, target: 1 },
          bdi: {},
          bdo: {},
          blockquote: { cite: 1 },
          body: {
            onafterprint: 1,
            onbeforeprint: 1,
            onbeforeunload: 1,
            onhashchange: 1,
            onmessage: 1,
            onoffline: 1,
            onpopstate: 1,
            onredo: 1,
            onresize: 1,
            onstorage: 1,
            onundo: 1,
            onunload: 1
          },
          br: {},
          button: {
            autofocus: 1,
            disabled: { disabled: 1 },
            form: 1,
            formaction: 1,
            formenctype: 1,
            formmethod: 1,
            formnovalidate: 1,
            formtarget: 1,
            name: 1,
            value: 1,
            type: { button: 1, submit: 1 }
          },
          canvas: { width: 1, height: 1 },
          caption: {},
          cite: {},
          code: {},
          col: { span: 1 },
          colgroup: { span: 1 },
          command: {
            type: 1,
            label: 1,
            icon: 1,
            disabled: 1,
            checked: 1,
            radiogroup: 1,
            command: 1
          },
          data: {},
          datalist: {},
          dd: {},
          del: { cite: 1, datetime: 1 },
          details: { open: 1 },
          dfn: {},
          dialog: { open: 1 },
          div: {},
          dl: {},
          dt: {},
          em: {},
          embed: { src: 1, height: 1, width: 1, type: 1 },
          fieldset: { disabled: 1, form: 1, name: 1 },
          figcaption: {},
          figure: {},
          footer: {},
          form: {
            "accept-charset": 1,
            action: 1,
            autocomplete: 1,
            enctype: {
              "multipart/form-data": 1,
              "application/x-www-form-urlencoded": 1
            },
            method: { get: 1, post: 1 },
            name: 1,
            novalidate: 1,
            target: { _blank: 1, top: 1 }
          },
          h1: {},
          h2: {},
          h3: {},
          h4: {},
          h5: {},
          h6: {},
          head: {},
          header: {},
          hr: {},
          html: { manifest: 1 },
          i: {},
          iframe: {
            name: 1,
            src: 1,
            height: 1,
            width: 1,
            sandbox: {
              "allow-same-origin": 1,
              "allow-top-navigation": 1,
              "allow-forms": 1,
              "allow-scripts": 1
            },
            seamless: { seamless: 1 }
          },
          img: { alt: 1, src: 1, height: 1, width: 1, usemap: 1, ismap: 1 },
          input: {
            type: {
              text: 1,
              password: 1,
              hidden: 1,
              checkbox: 1,
              submit: 1,
              radio: 1,
              file: 1,
              button: 1,
              reset: 1,
              image: 31,
              color: 1,
              date: 1,
              datetime: 1,
              "datetime-local": 1,
              email: 1,
              month: 1,
              number: 1,
              range: 1,
              search: 1,
              tel: 1,
              time: 1,
              url: 1,
              week: 1
            },
            accept: 1,
            alt: 1,
            autocomplete: { on: 1, off: 1 },
            autofocus: { autofocus: 1 },
            checked: { checked: 1 },
            disabled: { disabled: 1 },
            form: 1,
            formaction: 1,
            formenctype: {
              "application/x-www-form-urlencoded": 1,
              "multipart/form-data": 1,
              "text/plain": 1
            },
            formmethod: { get: 1, post: 1 },
            formnovalidate: { formnovalidate: 1 },
            formtarget: { _blank: 1, _self: 1, _parent: 1, _top: 1 },
            height: 1,
            list: 1,
            max: 1,
            maxlength: 1,
            min: 1,
            multiple: { multiple: 1 },
            name: 1,
            pattern: 1,
            placeholder: 1,
            readonly: { readonly: 1 },
            required: { required: 1 },
            size: 1,
            src: 1,
            step: 1,
            width: 1,
            files: 1,
            value: 1
          },
          ins: { cite: 1, datetime: 1 },
          kbd: {},
          keygen: {
            autofocus: 1,
            challenge: { challenge: 1 },
            disabled: { disabled: 1 },
            form: 1,
            keytype: { rsa: 1, dsa: 1, ec: 1 },
            name: 1
          },
          label: { form: 1, for: 1 },
          legend: {},
          li: { value: 1 },
          link: {
            href: 1,
            hreflang: 1,
            rel: { stylesheet: 1, icon: 1 },
            media: { all: 1, screen: 1, print: 1 },
            type: {
              "text/css": 1,
              "image/png": 1,
              "image/jpeg": 1,
              "image/gif": 1
            },
            sizes: 1
          },
          main: {},
          map: { name: 1 },
          mark: {},
          math: {},
          menu: { type: 1, label: 1 },
          meta: {
            "http-equiv": { "content-type": 1 },
            name: { description: 1, keywords: 1 },
            content: { "text/html; charset=UTF-8": 1 },
            charset: 1
          },
          meter: { value: 1, min: 1, max: 1, low: 1, high: 1, optimum: 1 },
          nav: {},
          noscript: { href: 1 },
          object: {
            param: 1,
            data: 1,
            type: 1,
            height: 1,
            width: 1,
            usemap: 1,
            name: 1,
            form: 1,
            classid: 1
          },
          ol: { start: 1, reversed: 1 },
          optgroup: { disabled: 1, label: 1 },
          option: { disabled: 1, selected: 1, label: 1, value: 1 },
          output: { for: 1, form: 1, name: 1 },
          p: {},
          param: { name: 1, value: 1 },
          pre: {},
          progress: { value: 1, max: 1 },
          q: { cite: 1 },
          rp: {},
          rt: {},
          ruby: {},
          s: {},
          samp: {},
          script: {
            charset: 1,
            type: { "text/javascript": 1 },
            src: 1,
            defer: 1,
            async: 1
          },
          select: {
            autofocus: 1,
            disabled: 1,
            form: 1,
            multiple: { multiple: 1 },
            name: 1,
            size: 1,
            readonly: { readonly: 1 }
          },
          small: {},
          source: { src: 1, type: 1, media: 1 },
          span: {},
          strong: {},
          style: { type: 1, media: { all: 1, screen: 1, print: 1 }, scoped: 1 },
          sub: {},
          sup: {},
          svg: {},
          table: { summary: 1 },
          tbody: {},
          td: { headers: 1, rowspan: 1, colspan: 1 },
          textarea: {
            autofocus: { autofocus: 1 },
            disabled: { disabled: 1 },
            form: 1,
            maxlength: 1,
            name: 1,
            placeholder: 1,
            readonly: { readonly: 1 },
            required: { required: 1 },
            rows: 1,
            cols: 1,
            wrap: { on: 1, off: 1, hard: 1, soft: 1 }
          },
          tfoot: {},
          th: { headers: 1, rowspan: 1, colspan: 1, scope: 1 },
          thead: {},
          time: { datetime: 1 },
          title: {},
          tr: {},
          track: { kind: 1, src: 1, srclang: 1, label: 1, default: 1 },
          section: {},
          summary: {},
          u: {},
          ul: {},
          var: {},
          video: {
            src: 1,
            autobuffer: 1,
            autoplay: { autoplay: 1 },
            loop: { loop: 1 },
            controls: { controls: 1 },
            width: 1,
            height: 1,
            poster: 1,
            muted: { muted: 1 },
            preload: { auto: 1, metadata: 1, none: 1 }
          },
          wbr: {}
        },
        a = Object.keys(u),
        h = function() {};
      (function() {
        (this.getCompletions = function(e, t, n, r) {
          var i = t.getTokenAt(n.row, n.column);
          if (!i) return [];
          if (f(i, "tag-name") || f(i, "tag-open") || f(i, "end-tag-open"))
            return this.getTagCompletions(e, t, n, r);
          if (f(i, "tag-whitespace") || f(i, "attribute-name"))
            return this.getAttributeCompletions(e, t, n, r);
          if (f(i, "attribute-value"))
            return this.getAttributeValueCompletions(e, t, n, r);
          var s = t.getLine(n.row).substr(0, n.column);
          return /&[a-z]*$/i.test(s)
            ? this.getHTMLEntityCompletions(e, t, n, r)
            : [];
        }),
          (this.getTagCompletions = function(e, t, n, r) {
            return a.map(function(e) {
              return { value: e, meta: "tag", score: 1e6 };
            });
          }),
          (this.getAttributeCompletions = function(e, t, n, r) {
            var i = l(t, n);
            if (!i) return [];
            var s = o;
            return (
              i in u && (s = s.concat(Object.keys(u[i]))),
              s.map(function(e) {
                return {
                  caption: e,
                  snippet: e + '="$0"',
                  meta: "attribute",
                  score: 1e6
                };
              })
            );
          }),
          (this.getAttributeValueCompletions = function(e, t, n, r) {
            var i = l(t, n),
              s = c(t, n);
            if (!i) return [];
            var o = [];
            return (
              i in u &&
                s in u[i] &&
                typeof u[i][s] == "object" &&
                (o = Object.keys(u[i][s])),
              o.map(function(e) {
                return {
                  caption: e,
                  snippet: e,
                  meta: "attribute value",
                  score: 1e6
                };
              })
            );
          }),
          (this.getHTMLEntityCompletions = function(e, t, n, r) {
            var i = [
              "Aacute;",
              "aacute;",
              "Acirc;",
              "acirc;",
              "acute;",
              "AElig;",
              "aelig;",
              "Agrave;",
              "agrave;",
              "alefsym;",
              "Alpha;",
              "alpha;",
              "amp;",
              "and;",
              "ang;",
              "Aring;",
              "aring;",
              "asymp;",
              "Atilde;",
              "atilde;",
              "Auml;",
              "auml;",
              "bdquo;",
              "Beta;",
              "beta;",
              "brvbar;",
              "bull;",
              "cap;",
              "Ccedil;",
              "ccedil;",
              "cedil;",
              "cent;",
              "Chi;",
              "chi;",
              "circ;",
              "clubs;",
              "cong;",
              "copy;",
              "crarr;",
              "cup;",
              "curren;",
              "Dagger;",
              "dagger;",
              "dArr;",
              "darr;",
              "deg;",
              "Delta;",
              "delta;",
              "diams;",
              "divide;",
              "Eacute;",
              "eacute;",
              "Ecirc;",
              "ecirc;",
              "Egrave;",
              "egrave;",
              "empty;",
              "emsp;",
              "ensp;",
              "Epsilon;",
              "epsilon;",
              "equiv;",
              "Eta;",
              "eta;",
              "ETH;",
              "eth;",
              "Euml;",
              "euml;",
              "euro;",
              "exist;",
              "fnof;",
              "forall;",
              "frac12;",
              "frac14;",
              "frac34;",
              "frasl;",
              "Gamma;",
              "gamma;",
              "ge;",
              "gt;",
              "hArr;",
              "harr;",
              "hearts;",
              "hellip;",
              "Iacute;",
              "iacute;",
              "Icirc;",
              "icirc;",
              "iexcl;",
              "Igrave;",
              "igrave;",
              "image;",
              "infin;",
              "int;",
              "Iota;",
              "iota;",
              "iquest;",
              "isin;",
              "Iuml;",
              "iuml;",
              "Kappa;",
              "kappa;",
              "Lambda;",
              "lambda;",
              "lang;",
              "laquo;",
              "lArr;",
              "larr;",
              "lceil;",
              "ldquo;",
              "le;",
              "lfloor;",
              "lowast;",
              "loz;",
              "lrm;",
              "lsaquo;",
              "lsquo;",
              "lt;",
              "macr;",
              "mdash;",
              "micro;",
              "middot;",
              "minus;",
              "Mu;",
              "mu;",
              "nabla;",
              "nbsp;",
              "ndash;",
              "ne;",
              "ni;",
              "not;",
              "notin;",
              "nsub;",
              "Ntilde;",
              "ntilde;",
              "Nu;",
              "nu;",
              "Oacute;",
              "oacute;",
              "Ocirc;",
              "ocirc;",
              "OElig;",
              "oelig;",
              "Ograve;",
              "ograve;",
              "oline;",
              "Omega;",
              "omega;",
              "Omicron;",
              "omicron;",
              "oplus;",
              "or;",
              "ordf;",
              "ordm;",
              "Oslash;",
              "oslash;",
              "Otilde;",
              "otilde;",
              "otimes;",
              "Ouml;",
              "ouml;",
              "para;",
              "part;",
              "permil;",
              "perp;",
              "Phi;",
              "phi;",
              "Pi;",
              "pi;",
              "piv;",
              "plusmn;",
              "pound;",
              "Prime;",
              "prime;",
              "prod;",
              "prop;",
              "Psi;",
              "psi;",
              "quot;",
              "radic;",
              "rang;",
              "raquo;",
              "rArr;",
              "rarr;",
              "rceil;",
              "rdquo;",
              "real;",
              "reg;",
              "rfloor;",
              "Rho;",
              "rho;",
              "rlm;",
              "rsaquo;",
              "rsquo;",
              "sbquo;",
              "Scaron;",
              "scaron;",
              "sdot;",
              "sect;",
              "shy;",
              "Sigma;",
              "sigma;",
              "sigmaf;",
              "sim;",
              "spades;",
              "sub;",
              "sube;",
              "sum;",
              "sup;",
              "sup1;",
              "sup2;",
              "sup3;",
              "supe;",
              "szlig;",
              "Tau;",
              "tau;",
              "there4;",
              "Theta;",
              "theta;",
              "thetasym;",
              "thinsp;",
              "THORN;",
              "thorn;",
              "tilde;",
              "times;",
              "trade;",
              "Uacute;",
              "uacute;",
              "uArr;",
              "uarr;",
              "Ucirc;",
              "ucirc;",
              "Ugrave;",
              "ugrave;",
              "uml;",
              "upsih;",
              "Upsilon;",
              "upsilon;",
              "Uuml;",
              "uuml;",
              "weierp;",
              "Xi;",
              "xi;",
              "Yacute;",
              "yacute;",
              "yen;",
              "Yuml;",
              "yuml;",
              "Zeta;",
              "zeta;",
              "zwj;",
              "zwnj;"
            ];
            return i.map(function(e) {
              return {
                caption: e,
                snippet: e,
                meta: "html entity",
                score: 1e6
              };
            });
          });
      }.call(h.prototype),
        (t.HtmlCompletions = h));
    }
  ),
  ace.define(
    "ace/mode/html",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/mode/text",
      "ace/mode/javascript",
      "ace/mode/css",
      "ace/mode/html_highlight_rules",
      "ace/mode/behaviour/xml",
      "ace/mode/folding/html",
      "ace/mode/html_completions",
      "ace/worker/worker_client"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("../lib/lang"),
        s = e("./text").Mode,
        o = e("./javascript").Mode,
        u = e("./css").Mode,
        a = e("./html_highlight_rules").HtmlHighlightRules,
        f = e("./behaviour/xml").XmlBehaviour,
        l = e("./folding/html").FoldMode,
        c = e("./html_completions").HtmlCompletions,
        h = e("../worker/worker_client").WorkerClient,
        p = [
          "area",
          "base",
          "br",
          "col",
          "embed",
          "hr",
          "img",
          "input",
          "keygen",
          "link",
          "meta",
          "menuitem",
          "param",
          "source",
          "track",
          "wbr"
        ],
        d = [
          "li",
          "dt",
          "dd",
          "p",
          "rt",
          "rp",
          "optgroup",
          "option",
          "colgroup",
          "td",
          "th"
        ],
        v = function(e) {
          (this.fragmentContext = e && e.fragmentContext),
            (this.HighlightRules = a),
            (this.$behaviour = new f()),
            (this.$completer = new c()),
            this.createModeDelegates({ "js-": o, "css-": u }),
            (this.foldingRules = new l(this.voidElements, i.arrayToMap(d)));
        };
      r.inherits(v, s),
        function() {
          (this.blockComment = { start: "<!--", end: "-->" }),
            (this.voidElements = i.arrayToMap(p)),
            (this.getNextLineIndent = function(e, t, n) {
              return this.$getIndent(t);
            }),
            (this.checkOutdent = function(e, t, n) {
              return !1;
            }),
            (this.getCompletions = function(e, t, n, r) {
              return this.$completer.getCompletions(e, t, n, r);
            }),
            (this.createWorker = function(e) {
              if (this.constructor != v) return;
              var t = new h(["ace"], "ace/mode/html_worker", "Worker");
              return (
                t.attachToDocument(e.getDocument()),
                this.fragmentContext &&
                  t.call("setOptions", [{ context: this.fragmentContext }]),
                t.on("error", function(t) {
                  e.setAnnotations(t.data);
                }),
                t.on("terminate", function() {
                  e.clearAnnotations();
                }),
                t
              );
            }),
            (this.$id = "ace/mode/html"),
            (this.snippetFileId = "ace/snippets/html");
        }.call(v.prototype),
        (t.Mode = v);
    }
  );
(function() {
  ace.require(["ace/mode/html"], function(m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
