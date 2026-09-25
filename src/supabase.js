import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rsfhivjofgtmqviwobwm.supabase.co'
const supabaseKey = 'sb_publishable_yRR_RGqs1YXZVM0Q0VM7_g_9_YnSBSl'

export const supabase = createClient(supabaseUrl, supabaseKey)
