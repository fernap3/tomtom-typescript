interface TomTomPOISearchResponse
{
	summary: TomTomPOISearchResponseSummary;
	results: TomTomPOISearchResponseResult[];
}

interface TomTomPOISearchResponseSummary
{
	query: string;
	queryType: "NEARBY" | "NON_NEAR";
	queryTime: number;
	numResults: number;
	offset: number;
	totalResults: number;
	fuzzyLevel: number;
	geoBias?: string;
}

interface TomTomPOISearchResponseResult
{
	type: "POI" | "Street" | "Geography" | "Point Address" | "Address Range" | "Cross Street";
	id: string;
	score: number;
	dist?: number;
	info: string;
	entityType?: "Country" | "CountrySubdivision" | "CountrySecondarySubdivision" | "CountryTertiarySubdivision" | "Municipality" | "MunicipalitySubdivision" | "Neighbourhood" | "PostalCodeArea";
	poi?: TomTomPOI;
	address: TomTomAddress;
	position: TomTomLatLon;
	mapcodes?: TomTomMapCode[];
	viewport: TomTomViewport;
	entryPoints: TomTomEntryPoint[];
	addressRanges?: unknown;
	dataSources?: TomTomDataSources;
}

interface TomTomAddress
{
	streetNumber: string;
	streetName: string;
	municipalitySubdivision: string;
	municipality: string;
	countrySecondarySubdivision: string;
	countryTertiarySubdivision: string;
	countrySubdivision: string;
	postalCode: string;
	extendedPostalCode: string;
	countryCode: string;
	country: string;
	countryCodeISO3: string;
	freeformAddress: string;
	countrySubdivisionName: string;
	localName: string;
}

interface TomTomLatLon
{
	lat: number;
	lon: number;
}

interface TomTomMapCode
{
	type: "Local" | "International" | "Alternative";
	fullMapcode: string;
	territory: string;
	code: string;
}

interface TomTomViewport
{
	topLeftPoint: TomTomLatLon;
	btmRightPoint: TomTomLatLon;
}

interface TomTomEntryPoint
{
	type: "main" | "minor";
}

interface TomTomDataSources
{
	chargingAvailability: unknown;
	id: string;
	geometry: unknown;

}

interface TomTomPOI
{
	name: string;
	phone: string;
	brands: TomTomPOIBrand[];
	url: string;
	categorySet: TomTomPOICategory[];
	openingHours: TomTomPOIOpeningHours;
	classifications: TomTomPOIClassification[];
	timeZone: TomTomTimeZone;
}

interface TomTomPOIBrand
{
	name: string;
}

interface TomTomPOICategory
{
	id: number;
}

interface TomTomPOIOpeningHours
{
	mode: string;
	timeRanges: TomTomTimeRange[];
}

interface TomTomTimeRange
{
	startTime: TomTomTime;
	endTime: TomTomTime;
}

interface TomTomTime
{
	date: string;
	hour: number;
	minute: number;
}

interface TomTomPOIClassification
{
	code: string;
	names: TomTomCategoryName[];
}

interface TomTomCategoryName
{
	nameLocale: string;
	name: string;
}

interface TomTomTimeZone
{
	ianaId: string;
}