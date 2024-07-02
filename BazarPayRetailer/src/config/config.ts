// eslint-disable-next-line no-unused-vars
const dev_url = "http://localhost";
// eslint-disable-next-line no-unused-vars
const dev_port = "4000";

const DO_url = "http";

const DO_port = "//142.93.222.151";

export const full_local_backend_url = "http://localhost:4000";
export const full_test_backend_url = "";
export const full_dev_backend_url = "https://enrollment.nexcaliber.com";
export const full_prod_backend_url =
  "https://dev-portal-backend.enrollment.nexcaliber.com";

// eslint-disable-next-line no-unused-vars
// export const local_url = "https://haldia-paribesh-app.onrender.com";
export const local_url = "http://192.168.1.46:8989";
// export const local_url = "http://192.168.1.33:4009";
export const local_port = "4009";

export const test_prod_url = "https";
export const test_prod_port = "";

export const dev_prod_url = "https";
export const dev_prod_port = "//enrollment.nexcaliber.com";

export const prod_url = "https";
export const prod_port = "//dev-portal-backend.enrollment.nexcaliber.com";

// Local, Devlopment and Production Admin Portal URL
export const localAdminUrl = "http://localhost:3000";
export const testAdminUrl = "";
export const devAdminUrl = "https://dev-admin.enrollment.nexcaliber.com";
export const prodAdminUrl = "https://admin.enrollment.nexcaliber.com";

// Local, Devlopment and Production Node Server URL
export const localServerUrl = "http://localhost:4008";
export const testServerUrl = "";
export const devServerUrl = "https://enrollment.nexcaliber.com";
export const prodServerUrl =
  "https://dev-portal-backend.enrollment.nexcaliber.com";

// Local, Devlopment and Production Member Portal URL
export const localMemberUrl = "http://localhost:3001";
export const testMemberUrl = "";
export const devMemberPortalUrl =
  "https://dev-member.enrollment.nexcaliber.com";
export const devFirebaseMemberPortalUrl = "https://member-nexcal.web.app/";
export const prodMemberPortalUrl = "https://member.enrollment.nexcaliber.com";

export const ADMIN_ENV: "PROD" | "DEV" | "LOCAL" = "LOCAL";

export const version = "v1";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const url =
  String(ADMIN_ENV) === "PROD"
    ? prod_url
    : String(ADMIN_ENV) === "DEV"
    ? dev_prod_url
    : String(ADMIN_ENV) === "LOCAL"
    ? local_url
    : ""; // Has to change for Dev, local and prod

export const port =
  String(ADMIN_ENV) === "PROD"
    ? prod_port
    : String(ADMIN_ENV) === "DEV"
    ? dev_prod_port
    : String(ADMIN_ENV) === "LOCAL"
    ? local_port
    : ""; // Has to change for Dev, local and prod

export const LINK = `${url}:${port}/api/v1`;
