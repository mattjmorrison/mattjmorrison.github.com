require 'jekyll_asset_pipeline'

module JekyllAssetPipeline
  class CoffeeScriptConverter < JekyllAssetPipeline::Converter
    require 'coffee-script'

    def self.filetype
      '.coffee'
    end

    def convert
      return CoffeeScript.compile(@content)
    end
  end

  class LessConverter < JekyllAssetPipeline::Converter
    require 'less'
    
    def self.filetype
      '.less'
    end

    def convert
      parser = Less::Parser.new :paths => Dir.glob("_assets/css/*/")
      parser.parse(@content).to_css
    end

  end
end
