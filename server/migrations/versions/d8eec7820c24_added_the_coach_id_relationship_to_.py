"""added the coach_id relationship to player

Revision ID: d8eec7820c24
Revises: eb4220aeefeb
Create Date: 2024-04-17 12:57:22.505214

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8eec7820c24'
down_revision = 'eb4220aeefeb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('players', schema=None) as batch_op:
        batch_op.add_column(sa.Column('coach_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_players_coach_id_coaches'), 'coaches', ['coach_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('players', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_players_coach_id_coaches'), type_='foreignkey')
        batch_op.drop_column('coach_id')

    # ### end Alembic commands ###
