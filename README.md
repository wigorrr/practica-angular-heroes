# ejercicioAngular2

Pasos Ejercicio angular:

Seteo del ambiente:

instalar node.js desde el sitio

instalar npm angular cli

posicionarse en la carpeta desde el terminal

instalar dependencias

ejecutar proyecto con ng serve —open


Consigna 1:
Colorear el héroe según su ID numérico dependiendo de si es multiplo de 3, 5 o de 3 y 5(verde, rojo, azul):
identifiqué el elemento dentro de su componente correspondiente (heroes) al cual quiero modificarle la propiedad COLOR.
Elegí la etiqueta <a> para aplicar la modificación. Para esto, apliqué el siguiente código en linea dentro de la etiqueta: 
[ngClass]="{'green': 1 === index % 3, 'red': 4 === index % 5}"
Así definí 2 clases (‘green’, y ‘red’) aplicando la primera a múltiplos de 3 (%3), y la segunda a múltiplos de 5 (%5). En este punto, forcé al código a encajar en los múltiplos indicándole que comience la indexación, en el primer caso en 1, y en el segundo caso en 4 (usé este “hardcodeo” ya que fue la forma mas sencilla que encontré para hacerlo).
Para que las clases tomaran los colores que les correspondían, dentro del archivo héroes.css definí dichas clases con la propiedad “color” correspondiente

Consigna 2
Para la lista de héroes en http://localhost:4200/heroes. Mostrar las fechas de creación en un formato más amigable para el usuario final. Se tienen que mostrar cuanto tiempo paso desde la creación. Por ejemplo: si fue creado hace 1 hora mostrar “an hour ago”. Si fue hace dos dias: “two days ago”. Si fue hace tres años: “3 years ago”. En este caso creé un nuevo pie desde consola con el comando:
ng g p pipes/DateAgo
Dentro del archivo date-Ago.pipe.ts (el que acabo de crear), realicé los pasos que encontré en el siguiente tutoríal: https://medium.com/@thunderroid/angular-date-ago-pipe-minutes-hours-days-months-years-ago-c4b5efae5fe5
Luego apliqué este nuevo pipe dentro del archivo html, linea 17 de la siguiente manera      <span class="badge">{{hero.id}}</span> {{hero.name}} Created: {{hero.created | dateAgo}}

Aclaraciones:

Arranqué el proyecto en una Mac antigua, y luego de setear el ambiente de trabajo, por motivos ajenos a mi (se rompió el cargador de esa maquina), tuve que pasarme a otra Mac. Intenté seguir desde donde había quedado, sin éxito, para luego darme cuenta que por algún motivo, al haber comenzado en otra computadora diferente a la que estaba utilizando, se habían instalado unas dependencias desactualizadas en relación al npm que tenia instalado en la otra maquina. Logre resolverlo descargando desde cero el proyecto nuevamente, y realizando el seteo del ambiente todo de nuevo.

Mi primer intención para la consigna 1 era crear un switch donde indicara que para un caso (múltiplo de 3) aplicara el color verde, para otro caso(múltiplo de 5) aplicara el color rojo, y para el ultimo caso(múltiplo de 3 y 5) mediante  un operador lógico (&&) aplicara el color azul. No logré aplicarlo de esta manera, ya que al tratar de capturar el id, se rompía la pagina.
