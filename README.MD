HU:
“Modificar el proceso de login para que además de usuario y contraseña sea obligatorio aceptar un check de política de privacidad”

1. Definición de los Criterios de Aceptación de esa HU

Una vez hubiese comentado con el equipo la tarea y tuviese una comprensión sóloda de esta, definitía el caso, en esta situación, mis criterios de aceptación para esta HU se centrarian en el añadido de aceptar la política de privacidad, no en el testing completo del login, es decir, principalmente probaría el happy path para ver que funciona para definir estos criterios, aunque obviamente buscaría unhappy paths mientras pruebo la HU.

La ejecución manual de esta sería seguir los pasos que mencionare en el gherkin a continuación.

2. Escritura en BDD Gherkin de los casos de test para validar esa HU

GIVEN I already have a registered user

WHEN I fill the user and password inputs

AND Click to accept the "aceptar política de privacidad"

AND I click the "Log in" button

THEN I should be able to log in


3. Teniendo en cuenta que esta HU tiene implementación tanto WEB como de IOS, Android y Backend, comenta que herramientas utilizarías para validar esta HU en cada disciplina.

Basandome en mis experiencias previas para web usaría navegador chrome, y dependiendo del producto y lo que me comentasen los compañeros, también realizaría usando otros navegadores.
Para IOS/Android usaría emuladores, en mi experiencia Kobiton es basntante óptimo, y el número de móviles a emular dependería también de lo que se pactase con el equipo.
Para back end no haría falta nada, ya que si la prueba funciona desde el front, el back funciona, si falla algo, entonces habría que ponerese a investigar.

4. Como QA Engineer dentro de un equipo, compártenos que ceremonias y reuniones crees que existirían durante la semana que dura el Sprint.

Para mi las 3 principales son el "sprint planning", la "daily" y el "sprint review".
También hay retrospectivas, reunión tres amigos o refinement, que aunque importantes, no son tan constantes.

5. Como último paso, nos gustaría incorporar la validación de este caso de uso a nuestro plan de regresión automática.

a. ¿Qué herramientas usarías para automatizar la parte Web, IOS, Android y la parte de Backend?
Aunque podría comentar sobre herramientas útiles para todos estos procesos, con las que tengo experiencia directa son cypress-javascript y selenium-python para web.
b. ¿Qué herramientas de CI/CD crees que se podría usar para

programar el lanzamiento de la regresión de forma planificada y
manual?
Una vez más, podría mencionar múltiples herramientas, pero con la que tengo experiencia es Jenkins.

6. El equipo de Desarrollo nos entrega un día tarde una HU prioritaria para el Producto. a. ¿Qué estrategia tomarías en caso de que veas que no puedes llegar a probarla?

Mejor caso escenario salgo una hora tarde.
Peor caso escenario reunión tres amigos para pedir que se paralice la release hasta que este probada.
Depende mucho de la definición de prioritaria y como afecte al negocio.


Prueba exploratoria y reporte de bugs. Dentro de la web de venta de billetes de Iberia, nombrada anteriormente, se requiere encontrar un bug o suponer que se encuentra un bug para poder reportarlo.

Asumo que no encontrare ningún bug en la página de iberia y procedo a inventarmelo.

Title: Landing page carrousel only loads 1 image

Issue creator: pedrogn Issue assigned: pedrogn

Environment: https://www.iberia.com/

Priority: High

Severity: Medium

Recurrency: High

Sprint: 1
    Expected result: When I arrive to the landing page and either click or the images pass on the carrousel I expect the images to change.
    Actual result: When I load the page the image on the carrousel is fully black and whenever I click on the arrow to change the image it remains the same.

Visual evidence: I would add pictures of the issue, how replicate it and the data and hour of the day, but since the issue is not real I wont.    

Gherkin:

WHEN I load the home page

AND I click the carrousel arrow

THEN the carrousel image should change






Tratamiento de datos en APIs
Teniendo en cuenta la documentación de la API de una tienda de mascotas
(https://petstore.swagger.io). Realizar los siguientes puntos con el framework de
Karate:
1. Crear usuario mediante petición HTTP y posteriormente recuperar sus
datos llamando al servicio correspondiente.
2. Recoger mediante petición HTTP, el JSON que retorna el endpoint
“/pet/findByStatus” y listar mediante una función los nombres de las
mascotas que se hayan vendido.
a. El formato de salida debe de estar formado por la tupla {id, name}.
b. Se puede utilizar la estructura de datos que se prefiera.
3. Crear una clase cuyo constructor requiera de la estructura de datos
anterior y realizar un método que pueda recorrerla para poder identificar
cuantas mascotas se llaman igual.
a. Ejemplo de salida: {“William”: 11, “Floyd”: 2}. Como output se pide
el código y los resultados de salida de los puntos anteriores.
