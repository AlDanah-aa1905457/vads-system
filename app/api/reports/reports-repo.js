import fs from 'fs-extra'
import path from 'path'

export default class ReportsRepo {
    constructor(){
        this.path = path.join(process.cwd(), 'app/data/reports.json')
    }
    async getReports() {
        const reports = await fs.readJson(this.path)
        return reports 
    }

    async addReport(report) {
        let reports = await getReports()
        let maxId = Math.max(...reports.map((r) => r.id)) + 1
        report.id = maxId
        reports.push(account)
        await fs.writeJSON(this.filePath, reports)
        return report
    }
    
}