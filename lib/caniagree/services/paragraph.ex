defmodule Caniagree.Services.Paragraph do
  use Ecto.Schema
  import Ecto.Changeset
  alias Caniagree.Services.Paragraph


  schema "paragraphs" do
    field :body, :string
    field :down_vote, :integer
    field :up_vote, :integer

    timestamps()
  end

  @doc false
  def changeset(%Paragraph{} = paragraph, attrs) do
    paragraph
    |> cast(attrs, [:body, :up_vote, :down_vote])
    |> validate_required([:body, :up_vote, :down_vote])
  end
end
