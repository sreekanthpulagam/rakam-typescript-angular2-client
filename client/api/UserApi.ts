/**
 * Rakam API Documentation
 * An analytics platform API that lets you create your own analytics services.
 *
 * OpenAPI spec version: 0.5
 * Contact: contact@rakam.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class UserApi {
    protected basePath = 'https://app.rakam.io/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * Get events of the user
     * 
     * @param userCreateSegment 
     */
    public createSegment (userCreateSegment: models.UserCreateSegment, extraHttpRequestParams?: any ) : Observable<models.SuccessMessage> {
        const path = this.basePath + '/user/create_segment';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'userCreateSegment' is not null or undefined
        if (userCreateSegment === null || userCreateSegment === undefined) {
            throw new Error('Required parameter userCreateSegment was null or undefined when calling createSegment.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(userCreateSegment);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create new user
     * 
     * @param user 
     */
    public createUser (user: models.User, extraHttpRequestParams?: any ) : Observable<number> {
        const path = this.basePath + '/user/create';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling createUser.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(user);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create multiple new users
     * Returns user ids. User id may be string or numeric.
     * @param userCreateUsers 
     */
    public createUsers (userCreateUsers: models.UserCreateUsers, extraHttpRequestParams?: any ) : Observable<Array<any>> {
        const path = this.basePath + '/user/batch/create';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'userCreateUsers' is not null or undefined
        if (userCreateUsers === null || userCreateUsers === undefined) {
            throw new Error('Required parameter userCreateUsers was null or undefined when calling createUsers.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(userCreateUsers);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get events of the user
     * 
     * @param userGetEvents 
     */
    public getEvents (userGetEvents: models.UserGetEvents, extraHttpRequestParams?: any ) : Observable<Array<models.CollectionEvent>> {
        const path = this.basePath + '/user/get_events';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'userGetEvents' is not null or undefined
        if (userGetEvents === null || userGetEvents === undefined) {
            throw new Error('Required parameter userGetEvents was null or undefined when calling getEvents.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(userGetEvents);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get user storage metadata
     * 
     */
    public getMetadata (extraHttpRequestParams?: any ) : Observable<models.MetadataResponse> {
        const path = this.basePath + '/user/metadata';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get user
     * 
     * @param userGetUser 
     */
    public getUser (userGetUser: models.UserGetUser, extraHttpRequestParams?: any ) : Observable<models.User> {
        const path = this.basePath + '/user/get';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'userGetUser' is not null or undefined
        if (userGetUser === null || userGetUser === undefined) {
            throw new Error('Required parameter userGetUser was null or undefined when calling getUser.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(userGetUser);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Set user property
     * 
     * @param userIncrementProperty 
     */
    public incrementProperty (userIncrementProperty: models.UserIncrementProperty, extraHttpRequestParams?: any ) : Observable<models.SuccessMessage> {
        const path = this.basePath + '/user/increment_property';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'userIncrementProperty' is not null or undefined
        if (userIncrementProperty === null || userIncrementProperty === undefined) {
            throw new Error('Required parameter userIncrementProperty was null or undefined when calling incrementProperty.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(userIncrementProperty);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Search users
     * 
     * @param userSearchUsers 
     */
    public searchUsers (userSearchUsers: models.UserSearchUsers, extraHttpRequestParams?: any ) : Observable<models.QueryResult> {
        const path = this.basePath + '/user/search';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'userSearchUsers' is not null or undefined
        if (userSearchUsers === null || userSearchUsers === undefined) {
            throw new Error('Required parameter userSearchUsers was null or undefined when calling searchUsers.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(userSearchUsers);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Set user properties
     * 
     * @param user 
     */
    public setProperties (user: models.User, extraHttpRequestParams?: any ) : Observable<number> {
        const path = this.basePath + '/user/set_properties';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling setProperties.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(user);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Set user properties once
     * 
     * @param user 
     */
    public setPropertiesOnce (user: models.User, extraHttpRequestParams?: any ) : Observable<number> {
        const path = this.basePath + '/user/set_properties_once';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling setPropertiesOnce.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(user);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Unset user property
     * 
     * @param userUnsetProperty 
     */
    public unsetProperty (userUnsetProperty: models.UserUnsetProperty, extraHttpRequestParams?: any ) : Observable<models.SuccessMessage> {
        const path = this.basePath + '/user/unset_properties';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'userUnsetProperty' is not null or undefined
        if (userUnsetProperty === null || userUnsetProperty === undefined) {
            throw new Error('Required parameter userUnsetProperty was null or undefined when calling unsetProperty.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(userUnsetProperty);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
