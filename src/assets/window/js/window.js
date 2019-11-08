const ipc = require('electron').ipcRenderer;
window.$ = window.jQuery = require('jquery');
var PDF = [];

ipc.on('finish', (event, result) => {
    PDF.PAGINA = 1;
    PDF.pdf = result;
    var url = '../../pdf/' + PDF.pdf + '.pdf';
    pdfjsLib.GlobalWorkerOptions.workerSrc =
        '../../../../node_modules/pdfjs-dist/build/pdf.worker.js';
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function (pdf) {
        console.debug(pdf);
        pdf.getPage(PDF.PAGINA).then(function (page) {
            var scale = 1.1;
            var viewport = page.getViewport({ scale: scale, });
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            var renderContext = {
                canvasContext: context,
                viewport: viewport,
            };
            page.render(renderContext);
        });
    });
})

function siguientepag(){
    var url = '../../pdf/' + PDF.pdf + '.pdf';
    pdfjsLib.GlobalWorkerOptions.workerSrc =
        '../../../../node_modules/pdfjs-dist/build/pdf.worker.js';
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function (pdf) {
        console.debug(pdf);
        PDF.PAGINA = PDF.PAGINA + 1;
        if (PDF.PAGINA == pdf.numPages){
            alert('Esta en la ultima pagina');
            PDF.PAGINA = pdf.numPages;
        }
        pdf.getPage(PDF.PAGINA).then(function (page) {
            var scale = 1.1;
            var viewport = page.getViewport({ scale: scale, });
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            var renderContext = {
                canvasContext: context,
                viewport: viewport,
            };
            page.render(renderContext);
        });
    });
}

function anteriorpag(){
    var url = '../../pdf/' + PDF.pdf + '.pdf';
    pdfjsLib.GlobalWorkerOptions.workerSrc =
        '../../../../node_modules/pdfjs-dist/build/pdf.worker.js';
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function (pdf) {
        console.debug(pdf);
        PDF.PAGINA = PDF.PAGINA - 1;
        if (PDF.PAGINA == 0){
            alert('Se encuentra en la primer pagina');
            PDF.PAGINA = 1;
        }
        pdf.getPage(PDF.PAGINA).then(function (page) {
            var scale = 1.1;
            var viewport = page.getViewport({ scale: scale, });
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            var renderContext = {
                canvasContext: context,
                viewport: viewport,
            };
            page.render(renderContext);
        });
    });
}


$('#sig').on('click', function() {
    siguientepag();
})

$('#ant').on('click', function() {
    anteriorpag();
})

$(window).on('keypress', function(e){
    console.debug(e.keyCode);
    if (e.keyCode == 44){
        alert('no tomes pantallazo putito')
    }
})