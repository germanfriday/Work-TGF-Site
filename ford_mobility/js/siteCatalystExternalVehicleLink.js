/**
 * Tracking external links for vehicles
 *
 * @param vehicle nameplate of the vehicle
 * @param siteSection section under the site delimited by ":"
 */
function externalVehicleLink(link)
{
    var s=s_gi("mktgafordcollegehqcom");
    s.linkTrackVars="eVar18,prop19,events";
    s.linkTrackEvents="event8";
    s.events="event8";
    s.prop19=link;
    s.eVar18=link;
    s.tl(this,"o","cspp: " + link);
}