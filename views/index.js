<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>LIST</title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="/send_url.js"></script>
  </head>
  <body>
    <header>
      <a href="/" class="header-logo">LIST</a>
    </header>
    <div class="container">
      <div class="container-header">
        <h1>Shopping List</h1>
      </div>
      <div class="index-table-wrapper">
        <div class="table-head">
          <span class="id-column">ID</span>
          <span>Item</span>
        </div>
        <% const items = [
          {id: 1, name: 'potatoes'},
          {id: 2, name: 'carrots'},
          {id: 3, name: 'onions'},
        ] %>
        <ul class="table-body">
          <% items.forEach((item) => { %>
            <li>
              <span class="id-column"><%= item.id %></span>
              <span class="name-column"><%= item.name %></span>
            </li>
          <% }) %>
        </ul>
      </div>
    </div>
  </body>
</html>
