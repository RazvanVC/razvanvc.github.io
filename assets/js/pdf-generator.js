function print() {
  const printWindow = window.open("/print", "_blank");
  printWindow.onload = function () {
    printWindow.print();
    setTimeout(() => printWindow.close(), 500);
  };
}

function generatePDF() {
  const button = document.getElementById("pdfButton");
  if (button) {
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';
  }

  const wrapper = document.querySelector(".wrapper");
  if (!wrapper) {
    console.error("Could not find .wrapper element");
    if (button) {
      button.disabled = false;
      button.innerHTML = '<i class="fas fa-file-pdf"></i>PDF';
    }
    return;
  }

  const nameEl = document.querySelector(".name");
  const name = nameEl ? nameEl.textContent.trim() : "CV";
  const filename = name.replace(/\s+/g, "_") + "_Resume.pdf";

  // Self-contained container with all styles + targeted break overrides
  const container = document.createElement("div");
  container.style.cssText = "width: 210mm; font-family: Roboto, sans-serif;";

  // Clone all stylesheets
  document.querySelectorAll('link[rel="stylesheet"], style').forEach((s) =>
    container.appendChild(s.cloneNode(true))
  );

  // Targeted overrides: only .item stays together, sections CAN split
  const extraStyle = document.createElement("style");
  extraStyle.textContent = `
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

    /* Sections CAN break across pages — only individual items stay together */
    .section, .summary-section, .experiences-section,
    .projects-section, .skills-section, .educations-section {
      page-break-inside: auto !important;
      break-inside: auto !important;
    }

    /* Each job/education/skill item stays on one page */
    .item, .skillset .item, .container-block {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    /* Prevent widow section titles — title sticks with the first item */
    .section-title, .container-block-title {
      page-break-after: avoid !important;
      break-after: avoid !important;
    }

    /* Compact spacing for PDF */
    .wrapper  { border-radius: 0 !important; box-shadow: none !important; max-width: 100% !important; }
    .main-wrapper { padding: 30px 35px !important; }
    .section  { margin-bottom: 18px !important; }
    .section-title { margin-bottom: 12px !important; padding-bottom: 7px !important; }
    .experiences-section .item,
    .educations-section .item { margin-bottom: 12px !important; padding-bottom: 12px !important; }
    .summary { font-size: 13px !important; }
    .details  { font-size: 13px !important; }
    .sidebar-wrapper .container-block { padding: 20px 25px !important; }

    /* Colors must render in PDF */
    .sidebar-wrapper   { -webkit-print-color-adjust: exact !important; }
    .level-bar-inner   { background-color: #6ec0d4 !important; -webkit-print-color-adjust: exact !important; }

    /* Hide buttons */
    .print-button, .pdf-button { display: none !important; }
  `;
  container.appendChild(extraStyle);
  container.appendChild(wrapper.cloneNode(true));

  const opt = {
    margin: [7, 4, 7, 4],            // top/left/bottom/right in mm
    filename: filename,
    image: { type: "jpeg", quality: 0.97 },
    html2canvas: {
      scale: 1.5,
      useCORS: true,
      letterRendering: true,
      logging: false,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
      compress: true,
    },
    pagebreak: {
      // 'css' respects page-break-inside CSS rules
      // 'legacy' is html2pdf fallback — do NOT use 'avoid-all' (too aggressive)
      mode: ["css", "legacy"],
      avoid: [".item", ".skillset .item", ".container-block"],
    },
  };

  html2pdf()
    .set(opt)
    .from(container)
    .save()
    .then(function () {
      if (button) {
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-file-pdf"></i>PDF';
      }
    })
    .catch(function (err) {
      console.error("Error generating PDF:", err);
      if (button) {
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-file-pdf"></i>PDF';
      }
    });
}
