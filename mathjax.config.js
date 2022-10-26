window.MathJax = {
    tex2jax: {
        inlineMath:  [ ['$','$'], ['\\(','\\)'] ],
        displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
        //processEscapes: true
    },
    TeX: {
        Macros: {
            RR: '{\\mathbf{R}}',
	    EE: '{ \\mathbb{E} }'
      },
      equationNumbers: { autoNumber: "AMS" }
    },
    loader: {load: ['[tex]/cancel']},
    tex: {packages: {'[+]': ['cancel']}}
};

