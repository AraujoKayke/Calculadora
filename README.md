# 💰 Registro de Despesas - Projeto com React

Este repositório contém uma aplicação web simples desenvolvida como **primeiro projeto com React**, com o objetivo de registrar despesas e visualizar um **resumo mensal**. O foco foi aplicar conceitos fundamentais de front-end, como gerenciamento de estado, componentização, props e renderização condicional.

---

## 📷 Demonstração

> Uma calculadora funcional desenvolvida com HTML, CSS e JavaScript puros como parte da interface visual.

![Preview do Projeto](screenshot.png) <!-- Substitua por uma imagem real, se desejar -->

---

## 🚀 Tecnologias Utilizadas

- **React**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

---

## 📚 O que eu aprendi

- **Gerenciamento de Estado**: Utilização do hook `useState` para controle reativo de dados.
- **Componentização**: Criação de componentes reutilizáveis, como `Botao` e `Input`, para facilitar a manutenção.
- **Props**: Passagem de dados entre componentes pai e filho.
- **Renderização Condicional**: Lógica para exibir diferentes partes da interface com base no estado atual da aplicação.

---

## 🛠️ Estrutura de Arquivos

```bash
📁 projeto-registro-despesas/
├── index.html
├── style.css
├── javascript.js
└── README.md
```

---

## 📄 index.html

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Calculadora</title>
</head>
<body>
  <div class="container">
    <h1>Kayke Araujo</h1>
    <div class="calculadora">
      <h1>Calculadora</h1>
      <p id="resultado"></p>
      <!-- Botões da calculadora -->
    </div>
  </div>
  <script src="./javascript.js"></script>
</body>
</html>
```

---

## 🎨 style.css

```css
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  background-image: linear-gradient(45deg, #000, #191970);
  height: 100vh;
  text-align: center;
  color: #fff;
}
...
```

---

## 🧠 javascript.js

```javascript
function insert(num) {
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
  document.getElementById('resultado').innerHTML = "";
}
function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
  } else {
    document.getElementById('resultado').innerHTML = "Insira Algo";
  }
}
```

---

## 📌 Observações

- Este projeto é uma base para futuros aprimoramentos, como a integração com banco de dados, filtros por categoria de despesas e autenticação de usuários.
- O layout foi feito com foco na simplicidade e responsividade básica.

---

## 🧑‍💻 Autor

Desenvolvido por **Kayke Araújo**

[🔗 LinkedIn](https://www.linkedin.com/in/seu-link) • [📧 Email](mailto:seuemail@exemplo.com)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.