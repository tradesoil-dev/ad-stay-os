import Button from "@/components/ui/Button";

export default function ConfirmationPage() {
  return (
    <div className="rounded-[2rem] bg-white p-10 text-center shadow-2xl shadow-black/10">
      <p className="text-sm uppercase tracking-[0.35em] text-primary">
        Reservation Request Received
      </p>

      <h1 className="mt-5 text-6xl font-serif text-ink">Your escape awaits.</h1>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
        Thank you for choosing Aqua Dunhinda. The hotel team has received your
        stay request and will contact you shortly to confirm availability,
        payment details, and arrival arrangements.
      </p>

      <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
        <div className="rounded-2xl border border-line p-6">
          <p className="text-3xl">📧</p>
          <h2 className="mt-4 text-2xl font-serif text-ink">
            Confirmation Email
          </h2>
          <p className="mt-3 text-muted">
            A booking summary can be sent to the guest.
          </p>
        </div>

        <div className="rounded-2xl border border-line p-6">
          <p className="text-3xl">📱</p>
          <h2 className="mt-4 text-2xl font-serif text-ink">
            WhatsApp Follow-up
          </h2>
          <p className="mt-3 text-muted">
            The hotel can continue the conversation directly.
          </p>
        </div>

        <div className="rounded-2xl border border-line p-6">
          <p className="text-3xl">🌿</p>
          <h2 className="mt-4 text-2xl font-serif text-ink">My Stay Portal</h2>
          <p className="mt-3 text-muted">
            Future guest portal for directions, experiences, and requests.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Button href="/" variant="outline">
          Back to Home
        </Button>

        <Button href="/my-booking">View My Booking</Button>
      </div>
    </div>
  );
}
