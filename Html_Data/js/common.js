document.addEventListener('DOMContentLoaded', () => {
    // Load top banner message from message.js variable (bypasses file:// CORS issue)
    if (typeof siteMessage !== 'undefined') {
        const trimmedText = siteMessage.trim();
        if (trimmedText) {
            const banner = document.getElementById('topBanner');
            if (banner) {
                banner.innerHTML = `<div class="marquee-content">${trimmedText}</div>`;
                banner.style.display = 'block';
            }
        }
    }

    // Render dynamic menus
    renderMainMenu();
    renderSidebar();
});

// Render main top navigation menu and footer links
function renderMainMenu() {
    const navContainer = document.getElementById('mainNavLinks');
    const footerNavContainer = document.getElementById('footerNavLinks');
    if (typeof mainMenuData === 'undefined') return;

    const isEn = window.currentLang === 'en';
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const pathParts = window.location.pathname.split('/');
    const isSubfolder = ['products', 'about', 'news', 'support', 'contact', 'solutions', 'location', 'location'].includes(pathParts[pathParts.length - 2]);
    const basePath = isSubfolder ? '../' : '';
    let html = '';
    let footerHtml = '';

    mainMenuData.forEach(item => {
        const itemTitle = isEn ? item.title_en : item.title_zh;
        const itemPath = item.link.split('/').pop();
        
        let isActive = false;
        // "產品介紹" 包含任何以 product 開頭的頁面 (product.html, products_a10x.html)
        if (item.id === 'products' && currentPath.startsWith('product')) {
            isActive = true;
        } else if (itemPath === currentPath && itemPath !== '#') {
            isActive = true;
        }

        const activeClass = isActive ? 'active' : '';
        html += `<a href="${basePath}${item.link}" class="nav-item ${activeClass}">${itemTitle}</a>`;
        footerHtml += `<li><a href="${basePath}${item.link}">${itemTitle}</a></li>`;
    });

    if (navContainer) navContainer.innerHTML = html;
    if (footerNavContainer) footerNavContainer.innerHTML = footerHtml;
}

// Render dynamic sidebar menu based on categoryData and currentLang
function renderSidebar() {
    const menuContainer = document.getElementById('categoryMenu');
    if (!menuContainer || typeof categoryData === 'undefined') return;

    const isEn = window.currentLang === 'en';
    const pathParts = window.location.pathname.split('/');
    const isSubfolder = ['products', 'about', 'news', 'support', 'contact', 'solutions', 'location'].includes(pathParts[pathParts.length - 2]);
    const basePath = isSubfolder ? '../' : '';
    let html = '';

    categoryData.forEach(group => {
        const groupTitle = isEn ? group.title_en : group.title_zh;
        // Keep I/O Modules open if we are on index/product page
        const isOpen = group.isOpen ? 'open' : '';
        const icon = group.isOpen ? 'expand_less' : 'expand_more';
        const activeClass = group.isOpen ? 'active' : '';

        html += `
            <li class="menu-group ${activeClass}">
                <div class="group-title" onclick="toggleSidebarGroup(this)">
                    ${groupTitle} <span class="material-symbols-outlined icon">${icon}</span>
                </div>
                <ul class="sub-menu ${isOpen}">`;
        
        group.items.forEach(item => {
            const itemTitle = isEn ? item.title_en : item.title_zh;
            // Highlight current page dynamically by checking pathname
            const itemPath = item.link.split('/').pop();
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const itemActiveClass = (itemPath === currentPath && itemPath !== '#') ? 'active' : '';
            html += `<li><a href="${basePath}${item.link}" class="${itemActiveClass}">${itemTitle}</a></li>`;
        });

        html += `
                </ul>
            </li>
        `;
    });

    menuContainer.innerHTML = html;
}

// Global function to toggle sidebar accordions
window.toggleSidebarGroup = function(element) {
    const parentLi = element.parentElement;
    const subMenu = parentLi.querySelector('.sub-menu');
    const icon = element.querySelector('.icon');

    const isOpen = subMenu.classList.contains('open');
    if (isOpen) {
        subMenu.classList.remove('open');
        parentLi.classList.remove('active');
        icon.textContent = 'expand_more';
    } else {
        subMenu.classList.add('open');
        parentLi.classList.add('active');
        icon.textContent = 'expand_less';
    }
};

// Re-render menus when language changes
window.addEventListener('languageChanged', () => {
    renderMainMenu();
    renderSidebar();
});
