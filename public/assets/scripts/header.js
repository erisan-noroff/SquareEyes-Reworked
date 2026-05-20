class Header {
    static init() {
        this.renderHeader();
    }
    
    static renderHeader() {
        const siteHeader = document.createElement('div');
        siteHeader.className = 'site-header';

        const logoHomeLink = document.createElement('a');
        logoHomeLink.className = 'logo';
        logoHomeLink.ariaLabel = 'Square Eyes home page';

        const logo = document.createElement('img');
        logo.src = 'assets/images/SquareEyes_Logo.png';
        logo.alt = '';
        logoHomeLink.append(logo);

        const desktopNav = document.createElement('nav');
        desktopNav.className = 'desktop-nav';
        desktopNav.ariaLabel = 'Site navigation menu';

        const desktopNavLinks = document.createElement('ul');
        desktopNavLinks.className = 'desktop-nav-links';
        
        const TEXT_NAV_LINKS = [
            { href: 'index.html', title: 'Home', page: 'index' },
            { href: 'movies.html', title: 'Movies', page: 'movies' },
            { href: 'contact.html', title: 'Contact', page: 'contact' },
            { href: 'about.html', title: 'About', page: 'about' }
        ];
        
        for (let i = 0; i < TEXT_NAV_LINKS.length; i++)
            desktopNavLinks.append(this.createTextNavLink(TEXT_NAV_LINKS[i]));

        const cartICon = this.createDesktopCartNavLink();
        desktopNavLinks.appendChild(cartICon);

        desktopNav.append(desktopNavLinks);
        siteHeader.append(logoHomeLink, desktopNav);
        document.querySelector('header')?.append(siteHeader);
    }

    static createTextNavLink({ href, title, page }) {
        const isActive = document.body.dataset.page === page;
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = href;
        link.textContent = title;
        link.className = 'nav-link';
        if (isActive)
            link.classList.add('nav-link-active');
        li.append(link);
        return li;
    }

    static createDesktopCartNavLink() {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = 'checkout.html';
        link.ariaLabel = 'Cart';
        const cartIcon = document.createElement('span');
        cartIcon.className = 'material-icons';
        cartIcon.textContent = 'shopping_cart';
        li.append(link, cartIcon);
        return li;
    }
}

Header.init();