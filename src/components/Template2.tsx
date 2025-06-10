type TemplateProps = {
  namaPengirim: string;
  namaPenerima: string;
  pesan: string;
};

export default function Template2({
  namaPengirim,
  namaPenerima,
  pesan,
}: TemplateProps) {
  return (
    <div
      style={{
        border: '2px dashed #1976d2',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        backgroundColor: '#e3f2fd',
        color: '#0d47a1',
      }}
    >
      <h2>✨ Halo {namaPenerima}!</h2>
      <p style={{ margin: '10px 0', fontWeight: 'bold' }}>{pesan}</p>
      <p style={{ textAlign: 'right', fontSize: '0.9rem' }}>
        Dari, {namaPengirim}
      </p>
    </div>
  );
}
