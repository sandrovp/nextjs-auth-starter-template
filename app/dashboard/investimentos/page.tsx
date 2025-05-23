import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrCreateUser } from "@/lib/supabase/user";
import { getOrCreateCarteiras } from "@/lib/supabase/carteira";
import { getInvestimentos } from '@/lib/supabase/investimento';
import { getAportesByInvestimento } from '@/lib/supabase/aportes';
import ClientSideInvestimentos from '@/app/components/ClientSideInvestimentos';

import Dashboard from "@/app/components/Dashboard";
