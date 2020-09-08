import { env } from './env'

/**
 * register on window.services.[name] the instance of service
 * @param {string} name - Register ser
 * @param {any} service - service instance
 */
export const registerService = ( name: string, service: any ): void => {
    if ( env.vars.mode == 'production' )
        return
    if ( !( window as any ).services ) {
        ( window as any ).services = {}
    }

    ( window as any ).services = Object.assign( ( window as any ).services, {
        [name]: service,
    } )
}
