return require'packer'.startup(function(use)
    use 'wbthomason/packer.nvim' 
    -- Color scheme
    use 'EdenEast/nightfox.nvim'
    -- Left menu
    use 'kyazdani42/nvim-tree.lua'
    -- Icons for menu and code
    use 'kyazdani42/nvim-web-devicons'

    -- LSP Config
    use 'neovim/nvim-lspconfig'
    use 'hrsh7th/nvim-cmp' -- Autocompletion plugin
    use 'hrsh7th/cmp-nvim-lsp' -- LSP source for nvim-cmp
    use 'saadparwaiz1/cmp_luasnip' -- Snippets source for nvim-cmp
    use 'L3MON4D3/LuaSnip' -- Snippets plugin
    -- Icons when autocompleting
    use 'onsails/lspkind.nvim'

    -- Notifications in vim
    use 'rcarriga/nvim-notify'
    -- Bottom line
    use 'nvim-lualine/lualine.nvim'
    -- Buffers like tabs
    use 'romgrk/barbar.nvim'
    -- Treesiter
    use 'nvim-treesitter/nvim-treesitter'
    -- Refactor
    use 'nvim-treesitter/nvim-treesitter-refactor'
    -- Telescope
    use {
        'nvim-telescope/telescope.nvim',
        requires = { {'nvim-lua/plenary.nvim'} }
    }
    -- Null-ls for lsp formating, code-actions, diagnosis
    use 'jose-elias-alvarez/null-ls.nvim'
    -- Git
    use {
        'tanvirtin/vgit.nvim',
        requires = {
            'nvim-lua/plenary.nvim'
        }
    }
end)
