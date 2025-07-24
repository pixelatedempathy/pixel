;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="145cf42d-429e-43e1-bfa1-1ada521e0fb1",e._sentryDebugIdIdentifier="sentry-dbid-145cf42d-429e-43e1-bfa1-1ada521e0fb1")}catch(e){}}();import { A as AIRepository } from './repository_BrF_Yqnd.mjs';
import './audit_Dj-29q3L.mjs';
import { createClient } from '@supabase/supabase-js';
import './astro/server_bjkJ-nhl.mjs';

const supabaseUrl = "https://dihivzkwbwpkpebichlk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaGl2emt3Yndwa3BlYmljaGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODA5NTAsImV4cCI6MjA2NDA1Njk1MH0.0JbH9qCH2vEIVsaD-R7mT7w3vkHBx6PbRscAfKxucVs";
createClient(supabaseUrl, supabaseKey) ;

const aiRepository = new AIRepository();

export { aiRepository as a };
