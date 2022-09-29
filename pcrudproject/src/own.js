// import $ from 'jquery';

//     // DataTables with Column Search by Text Inputs
//     document.addEventListener("DOMContentLoaded", function() {
//     // Setup - add a text input to each footer cell
//     $('#datatables-column-search-text-inputs tfoot th').each(function() {
//         var title = $(this).text();
//         $(this).html('<input type="text" className="form-control" placeholder="Search ' + title + '" />');
//     });
//     // DataTables
//     var table = $('#datatables-column-search-text-inputs').DataTable();
//     // Apply the search
//     table.columns().every(function() {
//         var that = this;
//         $('input', this.footer()).on('keyup change clear', function() {
//         if (that.search() !== this.value) {
//             that
//             .search(this.value)
//             .draw();
//         }
//         });
//     });
//     });