<template>
  <div v-bind:class="{ 'home': cl==='home', 'homeclosed': cl==='homeclosed' }">
  	<div class="content">
	  	<h1>Vue.js |<span> por matias web dev</span></h1>
	  	<h2>O que é o vue js?</h2>
	  	<p>O vue.js é um framework javascript <strong>progressivo</strong> para a criação de interfaces de usuários ( ser progressivo significa que você pode implementar o vue.js em um projeto pré existente ou em parte desse projeto sem problemas de compatibilidade ), o vue.js também é um sistema monolítico ( separado em módulos ) mas que desde sua criação foi projetado para trabalhar de maneira incremental ( isso quer dizer que, se não precisar de alguma parte ou alguma biblioteca, não precisa usar como ocorre com outros frameworks), como assim? imagine que você irá viajar com seu carro mas ele se encontra cheio de bagagens de outra viagem que você não irá utilizar, não seria mais fácil deixar a bagagem que não irá usar e viagar só com o necessário? essa é a proposta do vue.js, você tem uma biblioteca principal que é focada na parte visual do projeto, mas se precisar de outras ferramentas como rotas, ou bibliotecas de apoio é só carregar junto com a aplicação</p>

	  	<h2>Mãos a massa!</h2>
	  	<p>Antes de mergulhar fundo no vue.js vamos criar um pequeno projeto exemplificando conceitos básicos para um melhor entendimento deste ótimo framework para desenvolvimento de interfaces front-end.</p>
	  	<p class="important">É importante para começar com o vue.js que você tenha ao menos um conhecimento básico de HTML, CSS e Javascript, caso seja novo no mundo frontend seria melhor estudar as bases do desenvolvimento web antes de continuar.</p>
	  	<p>Antes de mergulhar fundo no vue.js vamos criar um pequeno projeto exemplificando conceitos básicos para um melhor entendimento deste ótimo framework para desenvolvimento de intefaces front-end.</p>
  	</div>
  </div>
</template>
<script>
export default{
  name: 'Home',
  props: ['cl']
}
</script>
<style scoped>
 p{
 	font-family: 'Arial', sans-serif;
 }
 .home{
 	padding-top: 50px;
 	text-align: center;
 	background: black;
 	color: white;
 }
 .homeclosed{
  grid-column-start: 1;
  grid-column-end: 3;
  padding-top: 50px;
  text-align: center;
  background: black;
  color: white;
}
.content{
	width: 80%;
	margin: 0 auto;
	text-align: left;
	line-height: 1.4em;
}

.content h1{
	text-align: center;
	margin: 30px;
}

.important{
	border-left: 8px solid #FF5C69;
	padding: 15px 30px;
	background:;
}
h1 span{
	font-size: 1.2rem;
	color: red;
}
</style>