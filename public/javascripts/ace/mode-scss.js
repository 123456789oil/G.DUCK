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
    "ace/mode/scss_highlight_rules",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/lib/lang",
      "ace/mode/text_highlight_rules",
      "ace/mode/css_highlight_rules"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("../lib/lang"),
        s = e("./text_highlight_rules").TextHighlightRules,
        o = e("./css_highlight_rules"),
        u = function() {
          var e = i.arrayToMap(o.supportType.split("|")),
            t = i.arrayToMap(
              "hsl|hsla|rgb|rgba|url|attr|counter|counters|abs|adjust_color|adjust_hue|alpha|join|blue|ceil|change_color|comparable|complement|darken|desaturate|floor|grayscale|green|hue|if|invert|join|length|lighten|lightness|mix|nth|opacify|opacity|percentage|quote|red|round|saturate|saturation|scale_color|transparentize|type_of|unit|unitless|unquote".split(
                "|"
              )
            ),
            n = i.arrayToMap(o.supportConstant.split("|")),
            r = i.arrayToMap(o.supportConstantColor.split("|")),
            s = i.arrayToMap(
              "@mixin|@extend|@include|@import|@media|@debug|@warn|@if|@for|@each|@while|@else|@font-face|@-webkit-keyframes|if|and|!default|module|def|end|declare".split(
                "|"
              )
            ),
            u = i.arrayToMap(
              "a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|u|ul|var|video|wbr|xmp".split(
                "|"
              )
            ),
            a = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";
          this.$rules = {
            start: [
              { token: "comment", regex: "\\/\\/.*$" },
              { token: "comment", regex: "\\/\\*", next: "comment" },
              { token: "string", regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
              { token: "string", regex: '["].*\\\\$', next: "qqstring" },
              { token: "string", regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']" },
              { token: "string", regex: "['].*\\\\$", next: "qstring" },
              {
                token: "constant.numeric",
                regex:
                  a +
                  "(?:ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"
              },
              { token: "constant.numeric", regex: "#[a-f0-9]{6}" },
              { token: "constant.numeric", regex: "#[a-f0-9]{3}" },
              { token: "constant.numeric", regex: a },
              {
                token: ["support.function", "string", "support.function"],
                regex: "(url\\()(.*)(\\))"
              },
              {
                token: function(i) {
                  return e.hasOwnProperty(i.toLowerCase())
                    ? "support.type"
                    : s.hasOwnProperty(i)
                    ? "keyword"
                    : n.hasOwnProperty(i)
                    ? "constant.language"
                    : t.hasOwnProperty(i)
                    ? "support.function"
                    : r.hasOwnProperty(i.toLowerCase())
                    ? "support.constant.color"
                    : u.hasOwnProperty(i.toLowerCase())
                    ? "variable.language"
                    : "text";
                },
                regex: "\\-?[@a-z_][@a-z0-9_\\-]*"
              },
              { token: "variable", regex: "[a-z_\\-$][a-z0-9_\\-$]*\\b" },
              { token: "variable.language", regex: "#[a-z0-9-_]+" },
              { token: "variable.language", regex: "\\.[a-z0-9-_]+" },
              { token: "variable.language", regex: ":[a-z0-9-_]+" },
              { token: "constant", regex: "[a-z0-9-_]+" },
              {
                token: "keyword.operator",
                regex: "<|>|<=|>=|==|!=|-|%|#|\\+|\\$|\\+|\\*"
              },
              { token: "paren.lparen", regex: "[[({]" },
              { token: "paren.rparen", regex: "[\\])}]" },
              { token: "text", regex: "\\s+" },
              { caseInsensitive: !0 }
            ],
            comment: [
              { token: "comment", regex: "\\*\\/", next: "start" },
              { defaultToken: "comment" }
            ],
            qqstring: [
              {
                token: "string",
                regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
                next: "start"
              },
              { token: "string", regex: ".+" }
            ],
            qstring: [
              {
                token: "string",
                regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
                next: "start"
              },
              { token: "string", regex: ".+" }
            ]
          };
        };
      r.inherits(u, s), (t.ScssHighlightRules = u);
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
    "ace/mode/scss",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text",
      "ace/mode/scss_highlight_rules",
      "ace/mode/matching_brace_outdent",
      "ace/mode/behaviour/css",
      "ace/mode/folding/cstyle",
      "ace/mode/css_completions"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("./text").Mode,
        s = e("./scss_highlight_rules").ScssHighlightRules,
        o = e("./matching_brace_outdent").MatchingBraceOutdent,
        u = e("./behaviour/css").CssBehaviour,
        a = e("./folding/cstyle").FoldMode,
        f = e("./css_completions").CssCompletions,
        l = function() {
          (this.HighlightRules = s),
            (this.$outdent = new o()),
            (this.$behaviour = new u()),
            (this.$completer = new f()),
            (this.foldingRules = new a());
        };
      r.inherits(l, i),
        function() {
          (this.lineCommentStart = "//"),
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
            (this.$id = "ace/mode/scss");
        }.call(l.prototype),
        (t.Mode = l);
    }
  );
(function() {
  ace.require(["ace/mode/scss"], function(m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
