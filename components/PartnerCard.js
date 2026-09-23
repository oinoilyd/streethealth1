const telHref = (phone) => `tel:+1${phone.replace(/\D/g, "")}`;

export default function PartnerCard({ partner }) {
  const { name, url, address, phone, email, note } = partner;
  return (
    <article className="partner-card">
      <h3>{url ? <a href={url} target="_blank" rel="noopener noreferrer">{name}</a> : name}</h3>
      <ul>
        {address && <li>{address}</li>}
        {phone && <li><a href={telHref(phone)}>{phone}</a></li>}
        {email && <li><a href={`mailto:${email}`}>{email}</a></li>}
        {note && <li className="muted">{note}</li>}
      </ul>
      {url && <a href={url} className="text-link" target="_blank" rel="noopener noreferrer">Visit website<span className="sr-only"> for {name}</span></a>}
    </article>
  );
}
