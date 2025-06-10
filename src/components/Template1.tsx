type TemplateProps = {
  namaPengirim: string;
  namaPenerima: string;
  pesan: string;
};

export default function Template1({
  namaPengirim,
  namaPenerima,
  pesan,
}: TemplateProps) {
  return (
    <div
      style={{
        border: '2px solid #4caf50',
        borderRadius: '12px',
        padding: '20px',
        maxWidth: '400px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#e8f5e9',
      }}
    >
      <h2 style={{ color: '#2e7d32' }}>🎉 Selamat, {namaPenerima}!</h2>
      <p style={{ fontSize: '1.1rem', margin: '12px 0' }}>{pesan}</p>
      <p style={{ fontStyle: 'italic', textAlign: 'right' }}>
        Salam hangat, <br />
        {namaPengirim}
      </p>
    </div>
  );
}
