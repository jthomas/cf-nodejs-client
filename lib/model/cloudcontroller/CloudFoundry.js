/*jslint node: true*/

var HttpUtils = require('../../utils/HttpUtils');

/**
 * This class manages the entry point with the Cloud Foundry Controller.
 * {@link https://github.com/cloudfoundry/uaa}
 * @param {String} endPoint [cc enpoint]
 * @constructor
 */
function CloudFoundry(endPoint) {
    "use strict";
    if (typeof endPoint === 'string') {
        this.API_URL = endPoint;
    }
    this.REST = new HttpUtils();
}

/**
 * Set endpoint
 * @param {String} endPoint [cc enpoint]
 */
CloudFoundry.prototype.setEndPoint = function (endPoint) {
    "use strict";
    this.API_URL = endPoint;
};

/**
 * Get information from Cloud Controller
 * {@link http://apidocs.cloudfoundry.org/214/info/get_info.html}
 * @return {Json} [description]
 */
CloudFoundry.prototype.getInfo = function () {
    "use strict";
    var url = this.API_URL + "/v2/info";
    var options = {
        method: 'GET',
        url: url
    };

    return this.REST.request(options, "200", true);
};

module.exports = CloudFoundry;
