document.addEventListener("DOMContentLoaded", () => {
  const currentPath = location.pathname;

  const header = document.getElementById("siteHeader");
  const footer = document.getElementById("siteFooter");

  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <a href="/" class="logo">
          <span class="logo-mark">P</span>
          <span class="logo-text">Pofura</span>
        </a>

        <nav class="nav">
          <a href="/home/" class="${currentPath.startsWith("/home") ? "active" : ""}">ホーム</a>
          <a href="/search/" class="${currentPath.startsWith("/search") ? "active" : ""}">探す</a>
          <a href="/works/" class="${currentPath.startsWith("/works") ? "active" : ""}">作品</a>
          <a href="/gilcha/" class="${currentPath.startsWith("/gilcha") ? "active" : ""}">Gilcha</a>
          <a href="/notice/" class="${currentPath.startsWith("/notice") ? "active" : ""}">通知</a>
        </nav>

        <a href="/post/" class="post-btn">投稿する</a>
      </header>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <p>© Pofura</p>
        <p>Creator Portfolio & Activity Timeline</p>
      </footer>
    `;
  }
});
