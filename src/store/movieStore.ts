import { writable } from 'svelte/store';
import type { Movie } from '$lib/models/movie';

const movies = writable<Movie[]>([
	{
	id: 1,
	name: 'John',
	 desc: 'lorem ipsum dolor',
		title: "title",
	 img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
	{
		id: 2,
		name: 'sara',
	    	desc: 'lorem ipsum dolor',
		title: "title",
			img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
	{
		id: 3,
		name: 'david',
		desc: 'lorem ipsum dolor',
		title:"title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
	{
		id: 4,
		name: 'mary',
		desc: 'lorem ipsum dolor',
		title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
		{
		id: 5,
		name: 'ahmad',
		desc: 'lorem ipsum dolor',
			title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
			{
		id: 6,
		name: 'mary',
		desc: 'lorem ipsum dolor',
				title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
		{
		id: 7,
		name: 'mary',
		desc: 'lorem ipsum dolor',
			title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
		{
		id: 8,
		name: 'mary',
		desc: 'lorem ipsum dolor',
			title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
		{
		id: 9,
		name: 'mary',
		desc: 'lorem ipsum dolor',
			title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
		{
		id: 10,
		name: 'mary',
		desc: 'lorem ipsum dolor',
		title:"title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
		{
		id: 11,
		name: 'mary',
		desc: 'lorem ipsum dolor',
			title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
		{
		id: 12,
		name: 'mary',
		desc: 'lorem ipsum dolor',
			title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
		{
		id: 13,
		name: 'mary',
		desc: 'lorem ipsum dolor',
			title: "title",
		img:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	},
]);

export default movies;
