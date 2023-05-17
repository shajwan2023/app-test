<!-- <script lang="ts">
import type { User } from '$lib/models/user';
import { supabase } from '$lib/supabase'
// console.log(supabase)


let loading =false;
let dataProduct:User[] =[];

const test=async () =>{
loading = true;
  const {data} =await supabase
  .from('users')
  .select('*');
  // console.log(response)
  dataProduct = data as User[]; // Type assertion
  loading = false;
}

test();



const insertData =async() => {
  const { data, error } = await supabase
  .from('users')
  .insert([
    { name: 'bnar' },
  ])
console.log(data)
}






</script>

{#if loading}
loading.....

{:else}
 {#each dataProduct as item}
 <p>{item.name}</p>
 {/each}
 

{/if}




<button class="bg-red-400 p-4" on:click={insertData}>send</button>

 -->


 <p>About page</p>