require 'sprockets'

Sprockets.register_mime_type 'application/ecmascript6', extensions: ['.es6', '.js.es6'], charset: :unicode
Sprockets.register_transformer 'application/ecmascript6', 'application/javascript', Tilt::ES6ModuleTranspilerTemplate

require 'sprockets/erb_processor'
Sprockets.register_transformer_suffix(["application/ecmascript6"], 'application/javascript+ruby', '.erb', Sprockets::ERBProcessor)
