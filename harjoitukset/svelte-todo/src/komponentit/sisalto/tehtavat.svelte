<script>
  import Tehtava from "./tehtava.svelte";
  import Lisatoimet from "./lisatoimet.svelte";
  import SuoritetutTeksti from "./suoritetut-teksti.svelte";
  import { getContext } from "svelte";
  
  let tehtavat = getContext("tehtavat");
  let filterSiirto = getContext("filtteri")

  tehtavat.tehtavat = [
    { id: 1, name: "Create a Svelte starter app", completed: true },
    { id: 2, name: "Create your first component", completed: true },
    { id: 3, name: "Complete the rest of the tutorial", completed: false },
  ];

  let totalTodos = $derived(tehtavat.tehtavat);
  tehtavat.tehtavienMaara = totalTodos;
  
  let filterTodos = $derived(filterSiirto.filterTodos)
  let filter = $derived(filterSiirto.filter)
  
  function removeTodo(todo) {
    tehtavat.tehtavat = tehtavat.tehtavat.filter((t) => t.id !== todo.id);
  }
  
  function updateTodo(todo) {
    const i = tehtavat.tehtavat.findIndex((t) => t.id === todo.id);
    tehtavat.tehtavat[i] = { ...tehtavat.tehtavat[i], ...todo };
  }

  const checkAllTodos = (completed) => {
    tehtavat.tehtavat.forEach((t, i) => (tehtavat.tehtavat[i].completed = completed));
  }
  const removeCompletedTodos = () => (tehtavat.tehtavat = tehtavat.tehtavat.filter((t) => !t.completed));
</script>
  
<style>
</style>

<SuoritetutTeksti />
<ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
  {#each filterTodos(filter, tehtavat.tehtavat) as todo}
    <li class="todo">
      <Tehtava {todo} onupdate={(e) => updateTodo(e.detail)} on:remove={(e) => removeTodo(e.detail)}/>
    </li>
  {:else}
    Nothing to do here!
  {/each}
</ul>
<hr>
<Lisatoimet 
  on:checkAll={(e) => checkAllTodos(e.detail)}
  on:removeCompleted={removeCompletedTodos}
/>