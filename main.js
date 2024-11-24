$(document).ready(function() {
    $('#tarefa-form').submit(function(e) {
        e.preventDefault(); 

        var tarefaNome = $('#nome-tarefa').val();

        if(tarefaNome) {
            var novoItem = $('<li>').text(tarefaNome);

            var botaoRemover = $('<button>').text('Excluir').addClass('remover');
            novoItem.append(botaoRemover);

            $('#lista-tarefas').append(novoItem);

            $('#nome-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('done');
    });

    $('#lista-tarefas').on('click', '.remover', function(e) {
        e.stopPropagation(); 
        $(this).parent().remove(); 
});

});