'use client';
import { useState, useRef } from 'react';
import Template1 from '@/components/Template1';
import Template2 from '@/components/Template2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AxiosError } from 'axios';

export default function Home() {
  const [namaPengirim, setNamaPengirim] = useState('');
  const [namaPenerima, setNamaPenerima] = useState('');
  const [pesan, setPesan] = useState('');
  const [template, setTemplate] = useState<'1' | '2'>('1');
  const [loading, setLoading] = useState(false);
  const [jenisUcapan, setJenisUcapan] = useState('ulang tahun');
  const [modePesan, setModePesan] = useState<'manual' | 'generate'>('manual');

  // Fungsi panggil API generate ucapan otomatis
  async function generateUcapan() {
    if (!namaPenerima) {
      alert('Isi dulu nama penerima');
      return;
    }

    setLoading(true);

    try {
      // Kirim promptUser juga ke API, agar bisa dipakai sebagai prompt
      const res = await fetch('/api/generateUcapan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ namaPenerima, jenisUcapan }),
      });

      const data = await res.json();

      if (res.ok) {
        setPesan(data.ucapan);
      } else {
        alert('Gagal generate ucapan: ' + data.error);
      }
    } catch (err) {
      const e = err as AxiosError;
      alert('Error: ' + e.response?.data);
    } finally {
      setLoading(false);
    }
  }

  const previewRef = useRef<HTMLDivElement>(null);

  // Fungsi download gambar JPG atau PNG
  const downloadImage = async (format: 'jpg' | 'png') => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, { scale: 2 });
    const imgData = canvas.toDataURL(`image/${format}`);

    // Buat link download otomatis
    const link = document.createElement('a');
    link.href = imgData;
    link.download = `ucapan.${format}`;
    link.click();
  };

  // Fungsi download PDF
  const downloadPDF = async () => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('ucapan.pdf');
  };

  return (
    <main
      style={{
        display: 'flex',
        gap: 24,
        padding: 24,
        maxWidth: 900,
        margin: 'auto',
        flexWrap: 'wrap',
      }}
    >
      {/* Form kiri */}
      <section style={{ flex: '1 1 400px', minWidth: 300 }}>
        <h1 style={{ marginBottom: '1.5rem' }}>Isi Data Ucapan</h1>

        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '0.3rem',
            }}
          >
            Nama Penerima:
          </label>
          <input
            type="text"
            value={namaPenerima}
            onChange={(e) => setNamaPenerima(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            placeholder="Masukkan nama penerima"
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '0.3rem',
            }}
          >
            Nama Pengirim:
          </label>
          <input
            type="text"
            value={namaPengirim}
            onChange={(e) => setNamaPengirim(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            placeholder="Masukkan nama pengirim"
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '0.3rem',
            }}
          >
            Jenis Ucapan:
          </label>
          <select
            value={jenisUcapan}
            onChange={(e) => setJenisUcapan(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '1rem',
              borderRadius: 4,
              border: '1px solid #ccc',
            }}
          >
            <option value="ulang tahun">Ulang Tahun</option>
            <option value="wisuda">Wisuda</option>
            <option value="pernikahan">Pernikahan</option>
            <option value="selamat">Ucapan Selamat</option>
          </select>
        </div>

        {/* Pilihan mode pesan */}
        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '0.3rem',
            }}
          >
            Mode Pesan:
          </label>
          <div>
            <label style={{ marginRight: 12 }}>
              <input
                type="radio"
                name="modePesan"
                checked={modePesan === 'manual'}
                onChange={() => setModePesan('manual')}
              />{' '}
              Manual
            </label>
            <label>
              <input
                type="radio"
                name="modePesan"
                checked={modePesan === 'generate'}
                onChange={() => setModePesan('generate')}
              />{' '}
              Generate
            </label>
          </div>
        </div>

        {/* Jika generate mode, tampilkan input prompt dan tombol generate */}
        {modePesan === 'generate' && (
          <div style={{ marginBottom: '1rem' }}>
            <button
              onClick={generateUcapan}
              disabled={loading}
              style={{
                marginTop: 8,
                padding: '0.6rem 1.2rem',
                fontSize: '1rem',
                borderRadius: 4,
                border: 'none',
                backgroundColor: '#1976d2',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              {loading ? 'Generating...' : 'Generate Pesan Otomatis'}
            </button>
          </div>
        )}

        {/* Jika manual mode, tampilkan textarea pesan biasa */}
        {modePesan === 'manual' && (
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                fontWeight: 'bold',
                marginBottom: '0.3rem',
              }}
            >
              Pesan:
            </label>
            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              rows={6}
              style={{
                width: '100%',
                padding: '8px',
                fontSize: '1rem',
                borderRadius: 4,
                border: '1px solid #ccc',
                resize: 'vertical',
              }}
              placeholder="Masukkan pesan ucapan"
            />
          </div>
        )}

        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '0.3rem',
            }}
          >
            Pilih Template:
          </label>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value as '1' | '2')}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            <option value="1">Template 1</option>
            <option value="2">Template 2</option>
          </select>
        </div>
      </section>

      {/* Preview kanan */}
      <section
        style={{
          flex: '1 1 400px',
          minWidth: 300,
          border: '1px solid #ddd',
          padding: 16,
        }}
      >
        <h2>Preview</h2>
        <div ref={previewRef}>
          {template === '1' ? (
            <Template1
              namaPengirim={namaPengirim}
              namaPenerima={namaPenerima}
              pesan={pesan}
            />
          ) : (
            <Template2
              namaPengirim={namaPengirim}
              namaPenerima={namaPenerima}
              pesan={pesan}
            />
          )}

          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <button onClick={() => downloadImage('png')} style={buttonStyle}>
              Download PNG
            </button>
            <button onClick={() => downloadImage('jpg')} style={buttonStyle}>
              Download JPG
            </button>
            <button onClick={downloadPDF} style={buttonStyle}>
              Download PDF
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const buttonStyle = {
  padding: '0.6rem 1.2rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#2e7d32',
  color: 'white',
  cursor: 'pointer',
};
