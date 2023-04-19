import ReportsRepo from "./reports-repo"
const repo = new ReportsRepo()

export async function GET() {
    const reports = await repo.getReports()
    return Response.json(reports)
}
export async function POST(request) {
    const report = await request.json()
    console.log(report);
    const newReport = await repo.addReport(report)
    return Response.json(newReport)
}