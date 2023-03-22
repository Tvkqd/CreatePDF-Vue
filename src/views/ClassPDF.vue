<template>
    <div>
        <img id="html_image">
        <div>
            <h1>Generate Class PDF</h1>
            <button @click="generatePDF">Generate PDF</button>
        </div>
    </div>
</template>

<script>

import jsPDF from 'jspdf';
import "jspdf-autotable";

export default {
    name: "classPDF",
    methods: {
        generatePDF() {
            const doc = new jsPDF("p", "in", "letter");

            //Page Header
            doc.setFontSize(18).text("How to Create a PDF in Vue", 1, 1);
            doc.setLineWidth(.01).line(1, 1.1, 7.5, 1.1);

            //Add PDF Icon
            doc.addImage(require("../../public/assets/pdf_img.png"), "png", 7, 0.5, 1, 1);

            //Add Border
            doc.rect(0.4, 0.4, 7.7, 10.2);

            //Installation Details
            doc.setFont("helvetica", "bold").setFontSize(16).text("Installation", 0.5, 1.5);
            doc.autoTable({
                theme: "plain",
                body: [
                    ["Install:", "npm install jspdf jspdf-autotable"], 
                    ["Use in a .vue file:", "import { jsPDF } from “jspdf”"],
                    ["", "import “jspdf-autotable”"],
                    []
                ],
                margin: { left: 0.8, top: 1.6 },
                bodyStyles: {
                    fontSize: 12
                },
                columnStyles: {
                    0: { cellWidth: 3 }
                },
                didDrawCell: (data) => this.drawLineBelowTableRows(data, [0])
            });

            //New PDF
            doc.text("Create a New PDF", 0.5, doc.lastAutoTable.finalY + 0.18);
            doc.autoTable({
                theme: "plain",
                body: [
                    ["New Document:", "new jsPDF(orientation, unit, format)"],
                    []
                ],
                margin: { left: 0.8 },
                bodyStyles: {
                    fontSize: 12
                },
                columnStyles: {
                    0: { cellWidth: 3 }
                }
            });

            //Create PDF Components
            doc.text("Add Components", 0.5, doc.lastAutoTable.finalY + 0.18);
            doc.autoTable({
                theme: "plain",
                body: [
                    ["Text:", "addText(text, x, y)"],
                    ["\t\tOption", "\tmaxWidth: number"],
                    ["\t\tSplit Text", "splitTextToSize(text, size)"],
                    ["\t\tSet Font", "doc.setFont(name, style, weight)"],
                    ["\t\tSet Font Size", "doc.setFontSize(size)"],
                    ["\t\tSet Text Color", "doc.setTextColor(color)"],
                    ["Image:", "addImage(imageData, format, x, y, width, height)"],
                    ["Lines and Shapes:", "line(x1, y1, x2, y2)"],
                    ["\t\tMultiple and Curved Lines:", "lines(lines, x1, y1)"],
                    ["\t\tCircle", "addCircle(x, y, r)"],
                    ["\t\tEllipse", "addEllipse(x, y, rx, ry)"],
                    ["\t\tRectangle", "addRect(x, y, w, h)"],
                    ["\t\tRounded Rectangle", "addRoundedRect(x, y, w, h, rx, ry)"],
                    ["\t\tTriangle", "addTriangle(x1, y1, x2, y2, x3, y3)"],
                    ["Table:", "autoTable(data)"],
                    ["\t\tcolumns", "[ { title: string, dataKey: string }"],
                    ["\t\titems", "[ { dataKey1: string, dataKey2: string } ]"],
                ],
                margin: { left: 0.8 },
                bodyStyles: {
                    fontSize: 12
                },
                columnStyles: {
                    0: { cellWidth: 3 }
                },
                didDrawCell: (data) => this.drawLineBelowTableRows(data, [5, 6, 13])
            });

            //Start Second Page
            doc.addPage();
            //Add Border
            doc.rect(0.4, 0.4, 7.7, 10.2);

            //Other Functions
            doc.text("Page Control", 0.5, 1.5);
            doc.autoTable({
                theme: "plain",
                body: [
                    ["New Page:", "addPage(format, orientation)"],
                    ["Insert Page:", "insertPage(targetPage, beforePage)"],
                    ["Set Page:", "setPage(beforePage)"],
                    ["Delete Page:", "deletePage(targetPage)"],
                    ["Move Page:", "movePage(targetPage, beforePage)"],
                    []
                ],
                margin: { left: 0.8, top: 1.6 },
                bodyStyles: {
                    fontSize: 12
                },
                columnStyles: {
                    0: { cellWidth: 3 }
                }
            });

            //Save PDF
            doc.text("Download the PDF", 0.5, doc.lastAutoTable.finalY + 0.18);
            doc.autoTable({
                theme: "plain",
                body: [
                    ["Save:", "save(filename)"],
                    []
                ],
                margin: { left: 0.8 },
                bodyStyles: {
                    fontSize: 12
                },
                columnStyles: {
                    0: { cellWidth: 3 }
                }
            });

            //Documentation
            doc.text("Documentation", 0.5, doc.lastAutoTable.finalY + 0.18);
            doc.autoTable({
                theme: "plain",
                body: [
                    ["jsPDF:", "https://rawgit.com/MrRio/jsPDF/master/docs/index.html"],
                    ["jsPDF Examples:", "https://parall.ax/products/jspdf"],
                    ["jsPDF-AutoTable:", "https://www.npmjs.com/package/jspdf-autotable"],
                    ["Presentation Material", "https://drive.google.com/drive/folders/18Rr0lutwKIPh7jn5CgKbFnRmGr3HZTNm?usp=sharing"],
                    ["GitHub Project", "https://github.com/LucasEwald/Vue-PDFs-Example"]
                ],
                margin: { left: 0.8 },
                bodyStyles: {
                    fontSize: 12
                },
                columnStyles: {
                    0: { cellWidth: 2.5 }
                }
            });

            doc.save("PDFs_in_Vue.pdf");
        },
        drawLineBelowTableRows(data, rows, lastCol = 1) {
            data.doc.setDrawColor(90);
            if (rows.includes(data.row.index))
                if (!lastCol || data.column.index !== lastCol)
                    data.doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height);
                else
                    data.doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width - 0.3, data.cell.y + data.cell.height);
        }
    }
}

</script>