document.getElementById('exportButton').addEventListener('click', function() {

    var iframe = document.getElementById('table-frame');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        
    // Create a deep clone of the main content
    var exportDiv = document.createElement('div');
    exportDiv.innerHTML = document.getElementById('main').innerHTML;

    var placeholder = exportDiv.querySelector('#table-frame');

    if (placeholder) {
        var iframeContent = iframeDocument.body.cloneNode(true);
        placeholder.parentNode.replaceChild(iframeContent, placeholder);
    }
    //    let htmlElement = document.getElementById('container');
       var opt = {
                    margin:       [0,0,0,0],
                    image:        { type: 'jpeg', quality: 1 },
                    html2canvas:  { scrollY: exportDiv.scrollY, scale: window.devicePixelRatio,},
                    jsPDF:        { unit: 'cm', format: 'a4', orientation: 'landscape'},
                    pagebreak: {after: '.container'}
                    };

       html2pdf().set(opt).from(exportDiv).save('exported_file.pdf');
    //    
    });