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

        const mobileToggleBtn = document.createElement('button');
        mobileToggleBtn.className = 'mobile-nav-toggle';
        mobileToggleBtn.ariaLabel = 'Open navigation menu';
        mobileToggleBtn.ariaExpanded = 'false';
        const mobileToggleBtnIcon = document.createElement('span');
        mobileToggleBtnIcon.className = 'material-icons';
        mobileToggleBtnIcon.textContent = 'menu';
        mobileToggleBtn.append(mobileToggleBtnIcon);

        const desktopNav = document.createElement('nav');
        desktopNav.className = 'desktop-nav';
        desktopNav.ariaLabel = 'Site navigation menu';
        const mobileNav = document.createElement('nav');
        mobileNav.className = 'mobile-nav';
        mobileNav.ariaLabel = 'Site navigation menu';

        const desktopNavLinks = document.createElement('ul');
        desktopNavLinks.className = 'desktop-nav-links';
        const mobileNavLinks = document.createElement('ul');
        mobileNavLinks.className = 'mobile-nav-links';

        const TEXT_NAV_LINKS = [
            {href: 'index.html', title: 'Home', page: 'index', icon: 'home'},
            {href: 'movies.html', title: 'Movies', page: 'movies', icon: 'movie'},
            {href: 'contact.html', title: 'Contact', page: 'contact', icon: 'mail'},
            {href: 'about.html', title: 'About', page: 'about', icon: 'info'}
        ];

        for (let i = 0; i < TEXT_NAV_LINKS.length; i++) {
            desktopNavLinks.append(this.createTextNavLink(TEXT_NAV_LINKS[i]));
            mobileNavLinks.append(this.createTextNavLink(TEXT_NAV_LINKS[i], true));
        }
        
        const cartIcon = this.createDesktopCartNavLink();
        desktopNavLinks.appendChild(cartIcon);
        
        mobileNavLinks.append(this.createTextNavLink(
            {href: 'checkout.html', title: 'Cart', page: 'checkout', icon: 'shopping_cart'},
            true
        ));

        mobileToggleBtn.addEventListener('click', (e) => {
            /* Prevents accidental double firing
            https://stackoverflow.com/questions/880608/prevent-click-event-from-firing-when-dblclick-event-fires */ 
            if (e.detail > 1) 
                return;
            
            const isOpen = !mobileNav.classList.contains('is-open');
            mobileNav.classList.toggle('is-open', isOpen);
            mobileToggleBtnIcon.textContent = isOpen ? 'close' : 'menu';
            mobileToggleBtn.ariaExpanded = String(isOpen);
        });

        desktopNav.append(desktopNavLinks);
        mobileNav.append(mobileNavLinks);
        siteHeader.append(logoHomeLink, mobileToggleBtn, mobileNav, desktopNav);
        document.querySelector('header')?.append(siteHeader);
    }

    static createTextNavLink({href, title, page, icon}, appendIcon = false) {
        const isActive = document.body.dataset.page === page;
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = href;
        link.textContent = title;
        link.className = 'nav-link';
        if (isActive)
            link.classList.add('nav-link-active');

        if (appendIcon) {
            const mobileIcon = document.createElement('span');
            mobileIcon.className = 'material-icons';
            mobileIcon.textContent = icon;
            link.prepend(mobileIcon);
        }

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
        link.append(cartIcon);
        li.append(link);
        return li;
    }
}

Header.init();
