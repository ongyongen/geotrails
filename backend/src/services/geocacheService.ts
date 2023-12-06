import { supabase } from "../db"
import { Geocache } from "../interfaces/geocache"
import { PostgrestSingleResponse } from "@supabase/supabase-js"
import { GEOCACHE_TABLE } from "../config/databaseTables"

export const getAllGeocaches = async (): Promise<PostgrestSingleResponse<Geocache>> => {
    return await supabase
        .from(GEOCACHE_TABLE)
        .select()
        .returns<Geocache>()
}

export const createNewGeocache = async (
    geocache: Geocache
): Promise<PostgrestSingleResponse<null>> => {
    return await supabase
        .from(GEOCACHE_TABLE)
        .insert([geocache])
}
