({
    block : 'page',
    title : 'Yeoman BEM',
    favicon : 'favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' }}],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    scripts : [{ elem : 'js', url : 'assets/application.min.js' }],
    content : [
        {
            elem : 'header',
            tag : 'header',
            content : [
            ]
        },
        {
            elem : 'content',
            tag : 'main',
            content : [
                { block : 'heading', lvl : 1, content : 'Level 1' },
                { block : 'paragraph', content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                { block : 'heading', lvl : 2, content : 'Level 2' },
                { block : 'paragraph', content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                { block : 'heading', lvl : 3, content : 'Level 3' },
                { block : 'paragraph', content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                { block : 'heading', lvl : 4, content : 'Level 4' },
                { block : 'paragraph', content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                {
                    block : 'source',
                    mods : { lang : 'js', theme : 'github' },
                    content : [
                        'function test() {\n' +
                        '    return \'false\';\n' +
                        '}'
                    ]
                },

                { block : 'paragraph', mods : { marker : 'nb' }, content : 'paragraph with NB' },
                {
                    block : 'list',
                    items : [
                        { text : 'first' },
                        { text : 'second' }
                    ]
                },
                { block : 'list', mods : { type: 'ordered' } },
                {
                    block : 'list',
                    mods : { type: 'unordered' },
                    items : [
                        { text : 'first' },
                        { text : 'second' }
                    ]
                },
                { block : 'list', mods : { type: 'description' } }
            ]
        },
        {
            elem : 'footer',
            tag : 'footer',
            content : [
                'License: MIT'
            ]
        }
    ]
})
