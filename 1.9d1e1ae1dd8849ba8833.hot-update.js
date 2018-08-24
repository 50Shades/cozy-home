webpackHotUpdate(1,{

/***/ "./src/locales/en.json":
/***/ (function(module, exports) {

module.exports = {"app":{"logo":{"alt":"%{name} logo"}},"manifest":{"name":"Collect","short_description":"Cozy Collect is the application that help you gather all your personal data inside Cozy.","long_description":"With Cozy Collect, you can easily:\n * Downloads documents from all your suppliers\n * Set how often Cozy will collect your bills\n * Access directly to the documents gathered by your Cozy","changes":"You haven't missed it, the Store arrived in your Cozy!\nWe took advantage of it to improve Collect:\n * Store adaptation.\n * Tile merge: when you have several accounts for a single supplier, the former are now merged under the supplier tile.\n * Improvement of some Connectors pages."},"add_service":"Add a service","account":{"config":{"default_folder":"/Administrative/%{name}","optional":"(Optional)","title":"Connect your %{name} account","data":{"title":"Collected data:","service":{"description":"Service description:"}},"tabs":{"sync":"synchronization","account":"account","data":"collected data"}},"disconnect":{"title":"Disconnection","description":"Your will be disconnected from this account, but imported data will be kept"},"form":{"title":"Account","label":{"firstname":"Firstname","lastname":"Lastname","login":"Login","consumerKey":"Consumer Key","consumerSecret":"Consumer Secret","appKey":"Application Key","appSecret":"Application Secret","tricountUrl":"Tricount URL","cardNumber":"Card Number","dob":"Date of birth","password":"Password","email":"Email","bank_identifier":"Bank identifier (optional)","profileName":"Profile Name","identifier":"Identifier","new_identifier":"Identifier","secret":"Password","answer":"Secret Answer","access_token":"Access token","accessTokenSecret":"Access token secret","apikey":"Api key","phoneNumber":"Phone number","folderPath":"Folder path","namePath":"Folder name","authCode":"Auth code","accountName":"Account name","loginUrl":"Login URL","token":"Token","agreement":"I agree","refreshToken":"Refresh Token","timeout":"Delay (ms)","branchName":"Branch","code":"Confidential code"},"placeholder":{"password":"The password you use to connect to the service","update_password":"Update the password","accountName":"Example: Personal account","namePath":"Example: Camille bills. Default name path is your login."},"button":{"connect":"Connect","cancel":"Cancel","save":"Save","disconnect":"Disconnect this account","delete":"Delete this account","advanced":"Advanced options","synchronize":"Synchronize now"}},"folder":{"title":"Related folder settings","link":"Open the folder in Cozy Drive","changePath":"change the path","error":"Oops, something went wrong. Don't panic, your files are still there, please try again later","close":"close","warning":"You're changing your folder path","oldFiles":"All your olds bills will be moved in your new path.","newFiles":"Your news bills will be downloaded in your new path.","newPath":"Everything went well, the new path for your %{name} account is:"},"success":{"title":{"connect":"Successful configuration!","update":"Your %{name} account is updated!"},"banksLinkText":"See my accounts into Cozy Banks","driveLinkText":"Open the folder into Cozy Drive","button":"Close"},"message":{"folder":{"title":"Folder","link":"Open folder on cozy drive"},"success":{"connect":"Your data will be available in your Cozy in a few minutes and the next ones will follow automatically.","update":"Your %{name} account has been updated successfully.","delete":"Account removed succesfully."},"syncing":{"bill":"Your bills are syncing and will be available in the following path:"},"synced":{"title":"Your data synchronization","cron":"Synchronization frequency: %{frequency}","cron_hourly":"each hour","cron_daily":"once a day","cron_weekly":"once a week","cron_monthly":"once a month","cron_undefined":"manually","syncing":"running…","unknown":"unknown","last_sync":"Last synchronization: **%{date}**","date_format":"MMMM D[,] YYYY [at] HH[:]mm","bill":"Find your datas in the Drive app at this location:"},"error":{"server":"Apologies, our server had an hiccup, do you mind starting again?","bad_credentials":"Sorry, you entered an incorrect login or password.","delete":"Apologies, our server had an hiccup, do you mind starting again?"}},"forceConnection":"Synchronize now","editor_detail":"Service developed by %{editor}"},"account_picker":{"add_account_button":{"label":"Add an account"}},"apps":{"title":"My apps"},"connection":{"error":{"default":{"title":"An error occured","description":"Unfortunately, something went wrong when trying to connect to %{name}. Please check again your account informations or visit our online help."},"DISK_QUOTA_EXCEEDED":{"title":"Cozy Storage full","description":"This service cannot fetch your documents now. Please remove some files or go to **Settings > Storage** to get more free space."},"CHALLENGE_ASKED":{"title":"Challenge required","description":"It seems that the website requires a second authentification factor that we don’t support yet. You may try to settle the issue on the [%{name}](%{link}) website before a retry."},"LOGIN_FAILED":{"title":"Bad credentials","description":"Bad credentials. Check the konnector fields and run the connection again."},"LOGIN_FAILED.NEEDS_SECRET":{"title":"Needs secret","description":"An additional field must be filled in before checking your credentials."},"LOGIN_FAILED.TOO_MANY_ATTEMPTS":{"title":"Temporarily blocked","description":"Too many attempts occured. Please update your credentials on [%{name}](%{link}) website and update the konnector later on."},"MAINTENANCE":{"title":"Unavailable website","description":"It seems that the [%{name}](%{link}) website is unavailable or the konnector must be updated. Please rerun the connector later or visit our online help."},"NOT_EXISTING_DIRECTORY":{"title":"Missing destination folder","description":"It seems that this account's destination folder has been deleted. Please restore it by disconnecting this account and then reconnect again."},"UNKNOWN_ERROR":{"title":"Connection error","description":"An unknown error has occurred."},"USER_ACTION_NEEDED":{"title":"Action needed on the provider","description":"It seems that the [%{name}](%{link}) website requires you to log in and to do a specific action. Please rerun the connector once you have settled the issue on the website."},"USER_ACTION_NEEDED.OAUTH_OUTDATED":{"title":"Access refresh required","description":"It seems that the [%{name}](%{link}) website requires you to refresh the access you gave to the connector. Please disconnect and reconnect this connector. No data will be lost."},"USER_ACTION_NEEDED.ACCOUNT_REMOVED":{"title":"Unavailable account","description":"It seems that your account is no longer active. Please check your account on [%{name}](%{link}) before retry."},"USER_ACTION_NEEDED.CHANGE_PASSWORD":{"title":"Password update required","description":"It seems that the [%{name}](%{link}) website requires you to log in and update your password. Please rerun the connector once you have settled the issue on the website."},"USER_ACTION_NEEDED.PERMISSIONS_CHANGED":{"title":"New permissions validation needed","description":"You connector was updated and the permissions changed. Please validate them before launching the connector again."},"VENDOR_DOWN":{"title":"Unavailable service","description":"It seems that the [%{name}](%{link}) service is unavailable at the moment. Please rerun the connector later."},"VENDOR_DOWN.BANK_DOWN":{"title":"Unavailable website","description":"It seems that the [%{name}](%{link}) website is unavailable at the moment. Please rerun the connector later."},"VENDOR_DOWN.LINXO_DOWN":{"title":"Unavailable service","description":"It seems that we are experiencing overload with our bank konnectors at the moment. Please rerun the connector later."}}},"intent":{"konnector":{"install":{"error":{"message":"The konnector cannot be installed"}}},"service":{"return":"Back to connectors list","success":{"button":{"label":"Close"}},"error":{"initialization":"Service failed to initialize. Sorry for the inconvenience.","creation":"Unable to create account, an error occurred.","cause":"Cause: %{error}"},"cancel":"Cancel","terminate":"Terminate"}},"field":{"password":{"visibility":{"hide":"Hide","show":"Show","title":{"hide":"Hide password","show":"Show password"}}}},"nav":{"services":"My services"},"category":{"all":"All","banking":"Banks","health":"Health","insurance":"Insurance","transport":"Transportation","social":"Social","isp":"ISP","telecom":"Telecom","energy":"Energy","host_provider":"Host","productivity":"Productivity","shopping":"Shopping","public_service":"Public Services","other":"Others"},"dataType":{"none":"%{name} won't access any data in your Cozy","activity":"Your activities","appointment":"Your appointments","bankTransactions":"Your bank transactions","bankAccounts":"Your bank accounts","bill":"Your bills","bloodPressure":"Your blood pressure","calendar":"Your calendars","certificate":"Your certificates","commit":"Your commits","consumption":"Your consumption","contact":"Your contacts","contract":"Your contracts","courseMaterial":"Your course materials","document":"Your documents","event":"Your events","family":"Your family informations","geopoint":"Your geolocations","heartbeat":"Your heartbeats","home":"Your home informations","phonecommunicationlog":"Your phone communications log","podcast":"Your podcasts","profile":"Your client profile","refund":"Your refunds","sinister":"Your sinisters","sleepTime":"Your sleep time","stepsNumber":"Your number of steps","temperature":"Your temperature data","travelDate":"Your travel dates","tweet":"Your tweets","videostream":"Your videos","weight":"Your weights"},"loading":{"initial":"Loading connectors accounts...","working":"Loading"},"validation":{"exact_length":"It's must be made up of %{length} characters exactly.","max_length":"The length maximum is %{length} characters.","min_length":"It should contain at least %{length} characters.","pattern":"The value must match a specific pattern: %{pattern}"},"error":{"initial":"Something went wrong when fetching your connectors and informations. Please refresh the page.","LOGIN_FAILED":"Bad credentials. Check the konnector fields and run the connection again.","UNKNOWN_ERROR":"Something unexpected happened while running the connector","JOB_TIMEOUT":"The connector execution was too long","button":{"reload":"Refresh now"}},"tutorial":{"cozy_collect":{"title":"Automate your data gathering","text":"They will be stored in your Cozy, you won't have to look for them anymore.","button":"Next"},"home":{"apps":{"text":"Easily manage your digital life (files, pictures, bank accounts, ...)","title":"Access to all your Cozy applications"},"services":{"text":"","title":"Automate your data gathering"}},"menu_apps":{"title":"Your Cozy is so much more than a simple data aggregator","text":"Open the Applications menu to discover all the features your Cozy has to offer.","button":"Discover my Apps"}},"maintenance":{"icon":"This connector is under maintenance","service":"Service interrupted","problem":"%{konnectorName} doesn't allow your Cozy to access your data","title":"What is going on ?"},"connector":{"debug":{"successMessage":"This konnector is for debug purpose only, this is an additionnal custom success message."},"empty":"No connectors configured","noAccount":"No account","add":"Add a service","no-connectors-connected":"You have not yet connected connectors","get-info":"Get automatically all your informations in your Cozy","connect-account":"Connect my accounts","logo":{"alt":"%{name} logo"},"enedis":{"description":{"service":"Recover your Linky data by connecting your Enedis account. You must have a Linky meter and have first created your Enedis account (on the [Enedis website](https://espace-client-connexion.enedis.fr/auth/UI/Login?realm=particuliers). This connector is provided by Fing for the MesInfos project. It retrieves the data from your electricity contract and downloads your electricity consumption the day before. This connector is running on your Cozy and the Fing will have no access to this data."}},"orange":{"message":{"delay":"Once connected, a demand to extract your data will be sent to Orange information system. These data will be available within 15 days. You data will be updated automatically, every 15 days."}},"orangemobile":{"description":{"connector":"In the context of 'MesInfos', Orange allows you to localize your phone regularly.\n\n**Data collection needs your express agreement**\n\nThis agreement may be revoked at any time by this data connector.\n\nBy clicking on \"Agree\", you give your consent to collect your phone's position, every 30 minutes. Information gathered will on be : \n<ul><li>Date and time of this location.</li><li>Location data of the closest radio antenna at the time of collect.</li></ul>Collected data by Orange after you agreement will be available only in your Cozy that you have been assigned in context of  « Mes Infos ». They will be added to location data already stored in call logs.","service":"This connector will download data from your Orange account on your Cozy. It will automatically download the call logs from your phone. Thus call logs include your phone number, your corresponding's phone number, date and time of this call and location data of the closest radio antenna at the time of collect.\n\nYou will be able to use these data in different apps in your Cozy, for example \"Mapping My Life\" (available soon on the Cozy Store).","field":{"agreement":"Do you agree that Orange localizes regularly your phone in context of  « Mes Infos » ?"}}},"orangevideos":{"description":{"service":"This connector will download data from your Orange account on your Cozy. It will automatically download the list of movies you downloaded in free (TV Replay) or paid VOD from 01/01/2015 (adult contents are not included).\n\nYou will be able to use these data in different apps in your Cozy, for example \"My Movies Music\" (available soon on the Cozy Store)."}},"axabanque102":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"banquepopulaire":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"barclays136":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bforbank97":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bnpparibas82":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"boursorama83":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bred":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"caatlantica3":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"caissedepargne1":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"carrefour159":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"casden173":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cdngroup109":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cdngroup88":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cic45":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cic63":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"comptenickel168":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"creditcooperatif148":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"creditmaritime":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"fortuneo84":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"hellobank145":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"hsbc119":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo).","connector":"The secret answer is [asked by HSBC](https://www.hsbc.fr/1/2/hsbc-france/particuliers/connexion) when you connect without double authentication. Example: what is the name of your pet?"}},"ingdirect95":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"labanquepostale44":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl143":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl144":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl146":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"monabanq96":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"societegenerale":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}}},"Queue":{"header":"Syncing accounts:","header_mobile":"%{done} of %{total}","header_done":"Synced %{done} out of %{total}","item":{"pending":"Pending"},"close":"Close"},"services":{"title":"My services"},"status":{"interrupted":"INTERRUPTED SERVICE","edf":{"maintenance":"EDF's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from EDF. We are trying to restore the situation and we will notice you when it will be fixed. [Learn more](%{supportLink})","support_link":"https://support.cozy.io/article/123-le-connecteur-edf-ne-fonctionne-pas"}},"tile":{"konnector":{"lastSyncDate":{"format":"MMM DD"}}}}

/***/ })

})
//# sourceMappingURL=1.9d1e1ae1dd8849ba8833.hot-update.js.map