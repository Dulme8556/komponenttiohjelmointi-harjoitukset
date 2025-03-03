<script>
    import { getContext } from "svelte";
    let tehtavat = getContext('tehtavat')
    let filterSiirto = getContext('filtteri');

    let filter = filterSiirto.filter
    let todos = tehtavat.tehtavat;
    filterSiirto.filterTodos = (filter, todos) =>
        filter === "active"
            ? tehtavat.tehtavat.filter((t) => !t.completed)
            : filter === "completed"
                ? tehtavat.tehtavat.filter((t) => t.completed)
                : tehtavat.tehtavat;
    
</script>

<style>
    
</style>

<div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" class:btn__primary={filterSiirto.filter === 'all'} 
    aria-pressed={filterSiirto.filter === 'all'} onclick={() => filterSiirto.filter = 'all'}>
        <span class="visually-hidden">Show</span>
        <span>All</span>
        <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={filterSiirto.filter === 'active'} 
    aria-pressed={filterSiirto.filter === 'active'} onclick={() => filterSiirto.filter = 'active'}>
        <span class="visually-hidden">Show</span>
        <span>Active</span>
        <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={filterSiirto.filter === 'completed'} 
    aria-pressed={filterSiirto.filter === 'completed'} onclick={() => filterSiirto.filter = 'completed'}>
        <span class="visually-hidden">Show</span>
        <span>Completed</span>
        <span class="visually-hidden">tasks</span>
    </button>
</div>