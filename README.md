# Assesment Frontend

1. El Sprint Planning al comienzo del Sprint, lo realiza el equipo completo y en el se mira el backlog y se elijen los items que se vana trabajar.

- Daily: Reuni[on diara corta en la que cada miembro del equipo expone que ha hecho para cumplir con sus items y si tiene algun impedimento para cumplir alguno.

- Sprint Review: Al final del sprint se revisa y evalua lo alcanzado, tambien se actualiza el backlog con nuevos requirimientos.

- Retrospectiva: Se hace luego del sprint review en ella los miembros del equipo exponene que ha ido bien, que pudo fallar y posibles mejoras para el proximo sprint.

2. Los wireframes son respresentacione visuales de la estructura y suncionalidad de una pagina web. Sireven para definir la estructura basica de una pagina y hacerse una idea mas tangible de ella.
3. - Var: Era la forma en que se declaraban variables antes de ES6, su alcance puede ser global o local según donde se declare. var puede ser redeclarado en cualquier momento, lo que puede causar errores.

   - let: Las variables let tienen un alcance de bloque ({}) y pueden ser modificadas dentro de su ambito, pero no pueden ser redeclaradas. Si embargo si se pueden redeclarar en otro bloque y ser[an tomadas como variables diferentes.

   - const: Al igual que let tienen un alcance de bloque pero no pueden ser modificadas ni redeclaradas.

4. - git branch rama-1

- git checkout -b rama-1

5. Git merge fusiona dos ramas manteniendo el historial de commits en paralelo, git rebase toma los commits de la rama actual y los lleva hasta el final del historial de la rama sobra la cual se hara rebase.
6. Un pull request es un peticion que se realiza para comparar los cambios realizados localmente con el repositorio remoto, una vez este pr es aprobado los cambios se fusionan y se integran al repositorio remoto.

un git pull se usa en el repositorio local para traer la ultima version del repositorio remoto.

7. Es una representacion del DOM guardada en memoria, es un intemediario entre la aplicacion y el dom. Cuando hay cambios en los estados de la aplicacion este calcula la mejor forma de actualizar el DOM.

8.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.c-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 40px;
  gap: 30px;
}

.c-section__title {
  width: 100%;
  background-color: black;
  border-top: 10px solid grey;
  color: whitesmoke;
  text-align: center;
  padding: 15px;
}

.c-services {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.c-services__item {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: whitesmoke;
  list-style: none;
  padding: 20px;
}

.c-services__item:hover {
  box-shadow: 0px 2px 3px grey;
}

h3 {
  text-indent: 50px;
}
```
