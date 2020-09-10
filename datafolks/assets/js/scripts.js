$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
	var name = button.data('project') 
	var image = button.data('url') 
	var info = button.data('info')
  var modal = $(this)
	modal.find('.modal-body #project-name').text(name)
	modal.find('.modal-body #project-img').attr("src",image);
	modal.find('.modal-body #project-info').text(info);
	
})