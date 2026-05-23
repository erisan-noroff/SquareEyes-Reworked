class Footer {
    static init() {
        this.renderFooter();
    }

    static renderFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;
        
        const newsletter = document.createElement('div');
        newsletter.className = 'newsletter';
        footer.append(newsletter);
        
        const pageWrapper = document.createElement('div');
        pageWrapper.className = 'page-wrapper';
        newsletter.append(pageWrapper);

        const newsletterContent = document.createElement('div');
        newsletterContent.className = 'newsletter-content';
        pageWrapper.append(newsletterContent);
        
        const newsletterText = document.createElement('div');
        newsletterText.className = 'newsletter-text';
        newsletterContent.append(newsletterText);
        
        const eyebrow = document.createElement('p');
        eyebrow.className = 'eyebrow';
        eyebrow.textContent = 'Stay in the loop';
        
        const newsletterHeader = document.createElement('h2');
        newsletterHeader.textContent = 'New movie, every week';
        
        const newsletterSubtext = document.createElement('p');
        newsletterSubtext.className = 'newsletter-subtext';
        newsletterSubtext.textContent = 'We add fresh titles weekly. Be the first to know!';
        
        newsletterText.append(eyebrow, newsletterHeader, newsletterSubtext);
        
        const subscribeForm = document.createElement('form');
        subscribeForm.className = 'newsletter-form';
        
        const subscribeEmailInput = document.createElement('input');
        subscribeEmailInput.classList.add('input-text', 'input-regular');
        subscribeEmailInput.placeholder = 'name@example.com'
        subscribeEmailInput.ariaLabel = 'Email';
        
        const subscribeButton = document.createElement('button');
        subscribeButton.classList.add('btn', 'btn-primary');
        subscribeButton.textContent = 'Subscribe';
        
        subscribeForm.append(subscribeEmailInput, subscribeButton);
        newsletterContent.append(newsletterText, subscribeForm);
        
        const copyright = document.createElement('div');
        copyright.className = 'copyright';
        const copyrightText = document.createElement('p');
        copyrightText.textContent = 'Copyright © 2024 Square Eyes';
        copyright.append(copyrightText);
        footer.append(copyright);
    }
}

Footer.init();