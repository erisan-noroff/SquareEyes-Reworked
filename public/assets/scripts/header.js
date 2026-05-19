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
        
        const NAV_LINKS = [
            { href: 'index.html', label: 'Home', page: 'index' },
            { href: 'movies.html', label: 'Movies', page: 'movies' },
            { href: 'contact.html', label: 'Contact', page: 'contact' },
            { href: 'about.html', label: 'About', page: 'about' },
            { href: 'cart.html', label: '', page: 'cart' }
        ];
        
        for (let i = 0; i < NAV_LINKS.length; i++)
            desktopNavLinks.append(this.createNavLink(NAV_LINKS[i]));
        
        desktopNav.append(desktopNavLinks);
        siteHeader.append(logoHomeLink, desktopNav);
        document.querySelector('header')?.append(siteHeader);
    }

    static createNavLink({ href, label, page }) {
        const isActive = document.body.dataset.page === page;
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        link.className = 'nav-link';
        if (isActive) link.classList.add('desktop-nav-link-active');
        li.append(link);
        return li;
    }
}

Header.init();