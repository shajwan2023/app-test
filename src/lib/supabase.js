import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lswdgtoykmtblypmfofq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzd2RndG95a210Ymx5cG1mb2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzMDkyMjUsImV4cCI6MTk5OTg4NTIyNX0.uBTujmVZ7APxz27aOyc1wsoP6FvhmE5oDAW0zsmXnoU'

export const supabase = createClient(supabaseUrl, supabaseKey)


