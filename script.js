const toggleMenu = () => {
    // Seleciona o elemento com a classe "menu-icon", que é o ícone de hambúrguer do menu
    const burgerMenu = document.querySelector(".menu-icon");

    // Obtém o valor atual do atributo 'src' da imagem do ícone de menu
    const src = burgerMenu.getAttribute('src');

    // Condicional para alternar entre os dois ícones: 
    // Se o ícone atual for o 'burger-menu.svg', muda para 'close.svg', e vice-versa
    const iconName = src === 'assets/burger-menu.svg' ?
        'assets/close.svg'  // Se o ícone atual for o de hambúrguer, muda para o ícone de fechar
        :
        'assets/burger-menu.svg';  // Caso contrário, muda para o ícone de hambúrguer

    // Atualiza o atributo 'src' da imagem para o novo ícone
    burgerMenu.setAttribute(
        'src', // Nome do atributo a ser modificado
        iconName // Novo valor do atributo, que é o ícone alternado
    );

    // Seleciona o elemento com a classe "navigation", que é a lista de navegação do menu
    const navigation = document.querySelector('.navigation');

    // Alterna a classe 'navigation--mobile' no menu de navegação. 
    // Essa classe é responsável por exibir a versão mobile do menu.
    navigation.classList.toggle(
        'navigation--mobile'
    );
};
