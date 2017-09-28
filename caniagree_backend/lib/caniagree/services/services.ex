defmodule Caniagree.Services do
  @moduledoc """
  The Services context.
  """

  import Ecto.Query, warn: false
  alias Caniagree.Repo

  alias Caniagree.Services.Paragraph

  @doc """
  Returns the list of paragraphs.

  ## Examples

      iex> list_paragraphs()
      [%Paragraph{}, ...]

  """
  def list_paragraphs do
    Repo.all(Paragraph)
  end

  @doc """
  Gets a single paragraph.

  Raises `Ecto.NoResultsError` if the Paragraph does not exist.

  ## Examples

      iex> get_paragraph!(123)
      %Paragraph{}

      iex> get_paragraph!(456)
      ** (Ecto.NoResultsError)

  """
  def get_paragraph!(id), do: Repo.get!(Paragraph, id)

  @doc """
  Creates a paragraph.

  ## Examples

      iex> create_paragraph(%{field: value})
      {:ok, %Paragraph{}}

      iex> create_paragraph(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_paragraph(attrs \\ %{}) do
    %Paragraph{}
    |> Paragraph.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a paragraph.

  ## Examples

      iex> update_paragraph(paragraph, %{field: new_value})
      {:ok, %Paragraph{}}

      iex> update_paragraph(paragraph, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_paragraph(%Paragraph{} = paragraph, attrs) do
    paragraph
    |> Paragraph.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Paragraph.

  ## Examples

      iex> delete_paragraph(paragraph)
      {:ok, %Paragraph{}}

      iex> delete_paragraph(paragraph)
      {:error, %Ecto.Changeset{}}

  """
  def delete_paragraph(%Paragraph{} = paragraph) do
    Repo.delete(paragraph)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking paragraph changes.

  ## Examples

      iex> change_paragraph(paragraph)
      %Ecto.Changeset{source: %Paragraph{}}

  """
  def change_paragraph(%Paragraph{} = paragraph) do
    Paragraph.changeset(paragraph, %{})
  end
end
